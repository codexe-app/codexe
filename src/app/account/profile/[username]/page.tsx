import Link from 'next/link'
import { Paper, Title, Text, Container, Box } from '@mantine/core'

export default function Page({ params }: { params: { username: string } }) {
  return (
    <Container size='responsive'>
      <Box mb='xl'>
        <Title ta='center' order={2} >
          Codexe Profile
        </Title>
        <Text c='dimmed' size='sm' ta='center' mt={5}>
          This is not implemented yet...
        </Text>
      </Box>
      <Container size={420} my={40}>
        <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
          <Title ta='center' order={4} >
            Hello {params.username}
          </Title>
        </Paper>
      </Container>
    </Container>
  )
}
