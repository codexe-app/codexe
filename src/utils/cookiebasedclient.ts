import { Amplify } from 'aws-amplify'
import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api'
import { cookies } from 'next/headers'
import config from '@/amplifyconfiguration.json'

Amplify.configure(config, { ssr: true })

export const cookieBasedClient = generateServerClientUsingCookies({
  config: config,
  cookies,
  authMode: 'apiKey'
})