
    import type { AppProps } from 'next/app';
    import Head from 'next/head';
    import { useEffect } from 'react';

    export default function MyApp({ Component, pageProps }: AppProps) {
      useEffect(() => {
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').then(registration => {
              console.log('Service Worker registered:', registration.scope);
            }).catch(error => {
              console.error('Service Worker registration failed:', error);
            });
          });
        }
      }, []);

      return (
        <>
          <Head>
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#FFFFFF" />
          </Head>
          <Component {...pageProps} />
        </>
      );
    }
   