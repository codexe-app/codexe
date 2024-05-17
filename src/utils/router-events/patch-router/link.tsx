import NextLink from 'next/link'
import { forwardRef, useContext } from 'react'
import { onStart } from '../events'
import { shouldTriggerStartEvent } from './should-trigger-start-event'
import { PageState } from '@/utils/context'

export const Link = forwardRef<HTMLAnchorElement, React.ComponentProps<'a'>>(function Link({ href, onClick, ...rest }, ref) {
  const useLink = href && href.startsWith('/')
  if (!useLink) return <a href={href} onClick={onClick} {...rest} />
  const { setPageState } = useContext(PageState)

  return (
    <NextLink
      href={href}
      onClick={(event) => {
        setPageState(false)
        if (shouldTriggerStartEvent(href, event)) onStart()
        if (onClick) onClick(event)
      }}
      {...rest}
      ref={ref}
    />
  )
})
