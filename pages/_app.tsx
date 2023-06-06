import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar1 from './component/Navbar1';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
  <Navbar1/> 
  <Component {...pageProps} />
  </>
  )
}
