import '@mantine/core/styles.css'
import React from 'react'
import { cookies } from 'next/headers'
import { MantineProvider, ColorSchemeScript, createTheme, rem, type MantineColorScheme } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import ConfigureAmplifyClientSide from '@/utils/configureamplifyclientside'
import { PageStateProvider } from '@/utils/context'
import { HandleOnComplete } from '@/utils/router-events'
import { mononoki, dinpro } from '@/app/fonts'
import { Roboto, Lexend, Albert_Sans as AlbertSans, Barlow, Overpass, Nanum_Gothic_Coding as NanumGothicCoding} from 'next/font/google'
import { tachyon, nord, moonlight, bumblebee, cupcake, synthwave, retro, dracula, opencolor } from '@/app/colors'

import '@mantine/notifications/styles.css'
import '@/app/app.scss'

export const metadata = {
  title: 'CODEXE',
  description: 'Information Architecture',
}

const roboto = Roboto({
  weight: '400', subsets: ['latin'], display: 'swap', variable: '--font-roboto',
})

const lexend = Lexend({
  weight: '400', subsets: ['latin'], display: 'swap', variable: '--font-lexend',
})

const albertsans = AlbertSans({ 
  weight: 'variable', subsets: ['latin'], display: 'swap', variable: '--font-albertsans'
})

const barlow = Barlow({ 
  weight: '400', subsets: ['latin'], display: 'swap', variable: '--font-barlow'
})

const overpass = Overpass({ 
  weight: '400', subsets: ['latin'], display: 'swap', variable: '--font-overpass'
})

const nanumgothiccoding = NanumGothicCoding({
  weight: '400', subsets: ['latin'], display: 'swap', variable: '--font-nanumgothiccoding'

})

const colours = { tachyon, opencolor, nord, moonlight, bumblebee, cupcake, synthwave, retro, dracula }

export type ThemeOptions = {
  config?: string
  palette?: string
  primary?: string
  font?: string
  heading?: string
  mono?: string
}

export type CodexeTheme = {
  colorScheme: MantineColorScheme
  white: string
  black: string
  primaryColor: string
  primaryShade: {}
  colors: {}
}

export default function RootLayout({ children }: { children: any }) {
  const cookieStore = cookies()
  var storedtheme: ThemeOptions = {
    palette: 'tachyon',
    font: 'var(--font-dinpro)',
    heading: 'var(--font-dinpro)',
    mono: 'var(--font-mononoki)',
  }
  var usertheme: CodexeTheme = tachyon
  const hasCookie = cookieStore.has('theme')
  if (hasCookie) {
    var stored = cookieStore.get('theme')
    //@ts-ignore
    storedtheme = JSON.parse(stored.value)
    //@ts-ignore
    usertheme = colours[storedtheme.palette]
  } else {
    console.log(`NO COOKIE, default theme loaded`)
  }

  const theme = createTheme({
    //@ts-ignore
    colorScheme: usertheme.colorScheme,
    white: usertheme.white,
    black: usertheme.black,
    primaryColor: usertheme.primaryColor,
    primaryShade: usertheme.primaryShade,
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
    <html lang='en' className={`${mononoki.variable} ${dinpro.variable} ${lexend.variable} ${roboto.variable} ${albertsans.variable} ${barlow.variable} ${overpass.variable} ${nanumgothiccoding.variable}`}>
      <head>
        <link rel='shortcut icon' href='/favicon.svg' />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no' />
      </head>
      <body>
        <ConfigureAmplifyClientSide />
        <ColorSchemeScript defaultColorScheme={usertheme.colorScheme} />
        <MantineProvider theme={theme} defaultColorScheme={usertheme.colorScheme}>
          <ModalsProvider>
            <PageStateProvider>
              {children}
              <Notifications />
            </PageStateProvider>
            <HandleOnComplete />
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  )
}
