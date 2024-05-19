import { Container } from '@mantine/core'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function DocumentView(props: any) {
  const { content } = props

  return (
    <Container>
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </Container>
  )
}
