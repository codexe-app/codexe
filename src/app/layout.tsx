import '@mantine/core/styles.css'
import React from 'react'
import { cookies } from 'next/headers'
import { MantineProvider, ColorSchemeScript,createTheme, virtualColor,MantineColorsTuple,rem } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import ConfigureAmplifyClientSide from '@/utils/configureamplifyclientside'
import { mononoki, dinpro } from '@/app/fonts'

import '@mantine/notifications/styles.css'
import '@/app/app.css'

export const metadata = {
  title: 'CODEXE',
  description: 'Information Architecture',
}

export default function RootLayout({ children }: { children: any }) {
  const cookieStore = cookies()
  //console.log(cookieStore)
  const hasCookie = cookieStore.has('colour')
  var colour = 'indigo'
  if ( hasCookie ) {
    var cookiecolour = cookieStore.get('colour')
    colour = cookiecolour?.value || 'indigo'
  }

  const indigo: MantineColorsTuple = [
    "#f1f3f8",
    "#e1e4ea",
    "#c0c6d6",
    "#9ca6c3",
    "#7e8cb2",
    "#6a7ba8",
    "#6072a6",
    "#506191",
    "#465682",
    "#394a74"
  ]
  
  const theme = createTheme({
    colors: {
      indigo,
    },
    defaultGradient: {
      from: 'primary.3',
      to: 'primary.7',
      deg: 75,
    },
    primaryColor: colour,
    primaryShade: { light: 7, dark: 4 },
    fontFamily: 'var(--font-dinpro)',
    fontFamilyMonospace: 'var(--font-mononoki)',
    headings: {
      fontWeight: '600',
      fontFamily: 'var(--font-dinpro)',
      sizes: {
        h1: { fontWeight: '700', fontSize: rem(48), lineHeight: '1.4' },
        h2: { fontWeight: '600', fontSize: rem(36), lineHeight: '1.5' },
        h6: { fontWeight: '600' },
      },
    },
    breakpoints: {
      xs: '361px',
      sm: '577px',
      md: '992px',
      lg: '1281px',
      xl: '1681px',
    },
  });
  return (
    <html lang='en' className={`${mononoki.variable} ${dinpro.variable} `}>
      <head>
        <ColorSchemeScript />
        <link rel='shortcut icon' href='/favicon.svg' />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no' />
      </head>
      <body>
        <ConfigureAmplifyClientSide />
        <MantineProvider theme={theme}>
          <ModalsProvider>
            {children}
            <Notifications />
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  )
}
