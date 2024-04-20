import { fetchAuthSession } from 'aws-amplify/auth/server'
import { NextRequest, NextResponse } from 'next/server'
import { runWithAmplifyServerContext } from '@/utils/amplifyserverutils'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec)
        return session.tokens !== undefined
      } catch (error) {
        console.log(`NO USER `, error)
        return false
      }
    },
  })

  if (authenticated || request.nextUrl.pathname == '/') {
    return response
  }

  const reroute = NextResponse.redirect(new URL('/account/signin', request.url))
  return reroute
}

export const config = {
  matcher: [
    '/((?!index|api|_next/static|_next/image|favicon.ico|logo.svg|account/*|about).*)'
  ],
}
