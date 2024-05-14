'use client'
import { useSetInspector } from '@/components/markdown/InspectorProvider'
import { useSlash } from '@/components/markdown/slash-menu'
import { defaultValueCtx, Editor, editorViewOptionsCtx, rootCtx } from '@milkdown/core'
import type { Ctx, MilkdownPlugin } from '@milkdown/ctx'
import { block } from '@milkdown/plugin-block'
import { clipboard } from '@milkdown/plugin-clipboard'
import { cursor } from '@milkdown/plugin-cursor'
import { history } from '@milkdown/plugin-history'
import { indent } from '@milkdown/plugin-indent'
import { listener, listenerCtx } from '@milkdown/plugin-listener'
import { math, mathBlockSchema } from '@milkdown/plugin-math'
import { prism, prismConfig } from '@milkdown/plugin-prism'
import { trailing } from '@milkdown/plugin-trailing'
import { upload } from '@milkdown/plugin-upload'
import { codeBlockSchema, commonmark, listItemSchema } from '@milkdown/preset-commonmark'
import { extendListItemSchemaForTask, wrapInTaskListInputRule, footnoteDefinitionSchema, footnoteReferenceSchema, gfm } from '@milkdown/preset-gfm'
import { useEditor } from '@milkdown/react'
import { nord } from '@milkdown/theme-nord'
import { $view, getMarkdown } from '@milkdown/utils'
import { useNodeViewFactory, usePluginViewFactory, useWidgetViewFactory } from '@prosemirror-adapter/react'
import debounce from 'lodash.debounce'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import { refractor } from 'refractor/lib/common'
import { Block } from '@/components/markdown/components/Block'
import { CodeBlock } from '@/components/markdown/components/CodeBlock'
import { FootnoteDef, FootnoteRef } from '@/components/markdown/components/Footnote'
import { ImageTooltip, imageTooltip } from '@/components/markdown/components/ImageTooltip'
import { linkPlugin } from '@/components/markdown/components/LinkWidget'
import { ListItem } from '@/components/markdown/components/ListItem'
import { MathBlock } from '@/components/markdown/components/MathBlock'
import { tableSelectorPlugin, TableTooltip, tableTooltip, tableTooltipCtx } from '@/components/markdown/components/TableWidget'
import { encode } from '@/utils/share'
import { useSetShare } from './ShareProvider'
import { notifications } from '@mantine/notifications'
import { useFeatureToggle } from './FeatureToggleProvider'
import { useSetProseState } from './ProseStateProvider'

export const usePlayground = (defaultValue: string, onChange: (markdown: string) => void) => {
  const pluginViewFactory = usePluginViewFactory()
  const nodeViewFactory = useNodeViewFactory()
  const widgetViewFactory = useWidgetViewFactory()
  const setProseState = useSetProseState()
  const setShare = useSetShare()
  const setInspector = useSetInspector()
  const { enableGFM, enableMath, enableBlockHandle } = useFeatureToggle()

  const gfmPlugins: MilkdownPlugin[] = useMemo(() => {
    return [
      gfm,
      tableTooltip,
      tableTooltipCtx,
      (ctx: Ctx) => async () => {
        ctx.set(tableTooltip.key, {
          view: pluginViewFactory({
            component: TableTooltip,
          }),
        })
      },
      $view(footnoteDefinitionSchema.node, () => nodeViewFactory({ component: FootnoteDef })),
      $view(footnoteReferenceSchema.node, () => nodeViewFactory({ component: FootnoteRef })),
      tableSelectorPlugin(widgetViewFactory),
    ].flat()
  }, [nodeViewFactory, pluginViewFactory, widgetViewFactory])

  const mathPlugins: MilkdownPlugin[] = useMemo(() => {
    return [
      $view(mathBlockSchema.node, () =>
        nodeViewFactory({
          component: MathBlock,
          stopEvent: () => true,
        })
      ),
      math,
    ].flat()
  }, [nodeViewFactory])

  const blockPlugins: MilkdownPlugin[] = useMemo(() => {
    return [
      block,
      (ctx: Ctx) => () => {
        ctx.set(block.key, {
          view: pluginViewFactory({
            component: Block,
          }),
        })
      },
    ].flat()
  }, [pluginViewFactory])

  const slash = useSlash()

  const editorInfo = useEditor(
    (root) => {
      return Editor.make()
        .enableInspector()
        .config((ctx) => {
          ctx.update(editorViewOptionsCtx, (prev) => ({
            ...prev,
            attributes: {
              class: 'mx-auto px-2 py-4 box-border',
            },
          }))
          ctx.set(rootCtx, root)
          ctx.set(defaultValueCtx, defaultValue)
          ctx
            .get(listenerCtx)
            .markdownUpdated((_, markdown) => {
              debounce(onChange, 100)(markdown)
            })
            .updated((_, doc) => {
              const state = doc.toJSON()
              debounce(setProseState, 100)(state)
            })
          ctx.update(prismConfig.key, (prev) => ({
            ...prev,
            configureRefractor: () => refractor,
          }))
          ctx.set(imageTooltip.key, {
            view: pluginViewFactory({
              component: ImageTooltip,
            }),
          })
          slash.config(ctx)
        })
        .config(nord)
        .use(commonmark)
        .use(linkPlugin(widgetViewFactory))
        .use(listener)
        .use(clipboard)
        .use(history)
        .use(cursor)
        .use(prism)
        .use(indent)
        .use(upload)
        .use(trailing)
        .use(imageTooltip)
        .use(slash.plugins)
        .use($view(listItemSchema.node, () => nodeViewFactory({ component: ListItem })))
        .use([extendListItemSchemaForTask, wrapInTaskListInputRule])
        .use($view(codeBlockSchema.node, () => nodeViewFactory({ component: CodeBlock })))
    },
    [onChange, defaultValue]
  )

  const { get, loading } = editorInfo

  useEffect(() => {
    requestAnimationFrame(() => {
      const effect = async () => {
        const editor = get()
        if (!editor) return
        if (enableMath) {
          editor.use(mathPlugins)
        } else {
          await editor.remove(mathPlugins)
        }
        if (enableGFM) {
          editor.use(gfmPlugins)
        } else {
          await editor.remove(gfmPlugins)
        }
        if (enableBlockHandle) {
          editor.use(blockPlugins)
        } else {
          await editor.remove(blockPlugins)
        }
        await editor.create()
      }
      effect().catch((e) => {
        console.error(e)
      })
    })
  }, [blockPlugins, get, gfmPlugins, mathPlugins, loading, enableMath, enableBlockHandle, setInspector])

  useEffect(() => {
    onChange(defaultValue)
  }, [defaultValue, onChange])

  const router = useRouter()

  useEffect(() => {
    setShare(() => () => {
      const editor = get()
      if (!editor) return

      const content = editor.action(getMarkdown())
      const base64 = encode(content)

      const url = new URL(location.href)
      url.searchParams.set('text', base64)
      navigator.clipboard.writeText(url.toString())
      notifications.show({
        title: 'Success',
        message: 'Share link copied.',
      })
      router.replace(url.toString())
    })
  }, [get, router, setShare])

  return editorInfo
}
