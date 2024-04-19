import localFont from 'next/font/local'

export const mononoki = localFont({
    src: [
      {
        path: '../../public/fonts/mononoki-Regular.woff2',
        weight: '400',
        style: 'normal',
      },
      {
        path: '../../public/fonts/mononoki-Italic.woff2',
        weight: '400',
        style: 'italic',
      },
      {
        path: '../../public/fonts/mononoki-Bold.woff2',
        weight: '700',
        style: 'normal',
      },
      {
        path: '../../public/fonts/mononoki-BoldItalic.woff2',
        weight: '700',
        style: 'italic',
      },
    ],
    variable: '--font-mononoki',
    display: 'swap',
  })
  
  export const dinpro = localFont({
    src: [
      {
        path: '../../public/fonts/DINPro-Regular.woff',
        weight: '400',
        style: 'normal',
      },
      {
        path: '../../public/fonts/DINPro-Medium.woff',
        weight: '500',
        style: 'normal',
      },
      {
        path: '../../public/fonts/DINPro-Bold.woff',
        weight: '600',
        style: 'normal',
      },
      {
        path: '../../public/fonts/DINPro-Black.woff',
        weight: '700',
        style: 'normal',
      },
    ],
    variable: '--font-dinpro',
    display: 'swap',
  });