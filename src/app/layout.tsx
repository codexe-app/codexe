import '@mantine/core/styles.css'
import React from 'react'
import { cookies } from 'next/headers'
import { MantineProvider, ColorSchemeScript, createTheme, virtualColor, MantineColorsTuple, rem } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import ConfigureAmplifyClientSide from '@/utils/configureamplifyclientside'
import { mononoki, dinpro } from '@/app/fonts'
import { Roboto } from 'next/font/google'
import { tachyon, moonlight, bumblebee, cupcake, synthwave, retro } from "@/app/colors"; 

import '@mantine/notifications/styles.css'
import '@/app/app.css'

export const metadata = {
  title: 'CODEXE',
  description: 'Information Architecture',
}

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const colours = { tachyon, moonlight, bumblebee, cupcake, synthwave, retro }

export default function RootLayout({ children }: { children: any }) {
  const cookieStore = cookies()
  var storedtheme = []
  //console.log(cookieStore)
  const hasCookie = cookieStore.has('theme')
  if (hasCookie) {
    var stored = cookieStore.get('theme')
    //@ts-ignore
    storedtheme = JSON.parse(stored.value)
  } else {
    storedtheme = [{ palette: 'cupcake', font: 'var(--font-dinpro)', heading: 'var(--font-dinpro)', mono: 'var(--font-mononoki)' }]
  }
  //@ts-ignore
  const usertheme = colours[storedtheme.palette]

  const theme = createTheme({
    //@ts-ignore
    colorScheme: usertheme.colorScheme,
    white: usertheme.white,
    black: usertheme.black,
    primaryColor: usertheme.primaryColor,
    primaryShade: usertheme.primaryShade,
    //@ts-ignore
    colors: usertheme.colors,
    defaultGradient: {
      from: 'primary.3',
      to: 'primary.7',
      deg: 75,
    },
    fontFamily: storedtheme.font,
    fontFamilyMonospace: storedtheme.mono,
    headings: {
      fontWeight: '600',
      fontFamily: storedtheme.heading,
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
  })
  return (
    <html lang='en' className={`${mononoki.variable} ${dinpro.variable} ${roboto.variable}`}>
      <head>
        <link rel='shortcut icon' href='/favicon.svg' />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no' />
      </head>
      <body>
        <ConfigureAmplifyClientSide />
        <MantineProvider theme={theme} forceColorScheme={usertheme.colorScheme}>
          <ModalsProvider>
            {children}
            <Notifications />
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  )
}
