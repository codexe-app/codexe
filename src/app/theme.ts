'use client'
import { createTheme, MantineColorsTuple, rem } from '@mantine/core';

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
  primaryColor: 'indigo',
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

export default theme