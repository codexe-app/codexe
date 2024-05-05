import { cookieBasedClient } from '@/utils/cookiebasedclient'
import { listDocuments } from '@/graphql/queries'
import { getUrl } from 'aws-amplify/storage'
import { Container } from '@mantine/core'
import type { Document } from '@/graphql/API'
import DocumentForm from '../form'

export default async function Page({ params }: { params: { slug: string } }) {
  const variables = {
    filter: {
      slug: { eq: params.slug },
    },
  }
  const response = (await cookieBasedClient.graphql({
    query: listDocuments,
    variables: variables,
  })) as {
    data: {
      listDocuments: {
        items: Document[]
      }
    }
  }

  const document = response.data.listDocuments.items[0]
  const graphic = graphicUpdate(document?.graphic?.key)

  async function graphicUpdate(key: any) {
    try {
      const result = await getUrl({
        path: key,
      })
      return result.url
    } catch (error) {
      console.log('Error ', error)
    }
  }

  return (
    <Container size='responsive'>
      <DocumentForm data={document} new={false} graphic={graphic} tab='view' />
    </Container>
  )
}
