import 'styles/style.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'
import HeadGlobal from 'components/HeadGlobal'
import Header from 'contents/Header'
import Footer from 'contents/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <HeadGlobal />
      <Header />
      <Component key={router.asPath} {...pageProps} />
      <Footer/>
    </ThemeProvider>
  )
}
export default MyApp
