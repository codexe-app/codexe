import { Container } from '@mantine/core'
import Markdown from 'react-markdown'

export default function DocumentView(props: any) {
  const { content } = props

  return (
    <Container>
      <Markdown>{content}</Markdown>
    </Container>
  )
}
