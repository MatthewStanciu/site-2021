
import * as React from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import '@/public/fonts.css'
import Meta from '@/components/meta'
import theme from '@/lib/theme'
import { ThemeProvider } from 'theme-ui'

const App = ({ Component, pageProps }: AppProps) => {
  const { query, pathname } = useRouter()
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App