import '@mantine/core/styles.css'
import React from 'react'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import ConfigureAmplifyClientSide from '@/utils/configureamplifyclientside'
import theme from '@/app/theme'
import { mononoki, dinpro } from '@/app/fonts'
import Shell from '@/app/shell'
import '@mantine/notifications/styles.css';
import '@/app/app.css'

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
        <ConfigureAmplifyClientSide />
        <MantineProvider theme={theme}>
          <ModalsProvider>
            <Shell>
              {children}
              <Notifications />
            </Shell>
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  )
}
