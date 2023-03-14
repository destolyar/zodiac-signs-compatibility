import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import ReactGA from 'react-ga';


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactGA.initialize('UA-57623464-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])
  
  return <Component {...pageProps} />
}
