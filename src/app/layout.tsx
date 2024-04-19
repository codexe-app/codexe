import '@mantine/core/styles.css'
import React from 'react'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import theme from '@/app/theme'
import { mononoki, dinpro } from '@/app/fonts';
import Navigation from '@/navigation'

export const metadata = {
  title: 'CODEXE',
  description: 'Information Architecture',
}

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang='en' className={`${mononoki.variable} ${dinpro.variable} `}>
      <head>
        <ColorSchemeScript />
        <link rel='shortcut icon' href='/favicon.svg' />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no' />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Navigation>{children}</Navigation>
        </MantineProvider>
      </body>
    </html>
  )
}
