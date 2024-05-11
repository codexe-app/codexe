'use client'
import { Box, Image } from '@mantine/core'
import { getUrl } from 'aws-amplify/storage'
import { useEffect, useState } from 'react'

export default function S3Media(props) {
  const [signedURL, setSignedURL] = useState()
  const { graphic } = props

  async function getUrlResult(path) {
    const signedURL = await getUrl({
      path: graphic.key,
      options: {
        validateObjectExistence: true, // Check if object exists before creating a URL
      },
    })

    setSignedURL(signedURL.url.href)
  }

  useEffect(() => {
    getUrlResult()
  }, [signedURL])

  return <Box><Image src={signedURL} height={80} alt={graphic.alt || ''} /></Box>
}
