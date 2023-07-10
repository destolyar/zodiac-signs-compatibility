import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target !== null) {
        const target = (e.target as HTMLElement).closest(".st-btn");
        if (target) {
          const networksMap = new Map();
          networksMap.set('copy', "Copy URL");
          networksMap.set('reddit', "Reddit");
          networksMap.set('facebook', "Facebook");
          networksMap.set('whatsapp', "Whatsapp");
          let network = networksMap.get((target as HTMLElement).dataset.network);
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            'event': 'share_button_clicked',
            'share_button_type': network
          });
        }
      }
    });
  }, [])

  return <>
    <Component {...pageProps} />
  </>
}
