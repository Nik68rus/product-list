import Head from 'next/head';
import type { AppProps } from 'next/app';

import Layout from '@/components/layout/Layout';
import { Roboto_Mono } from 'next/font/google';

import '@/styles/globals.css';

const roboto = Roboto_Mono({ subsets: ['latin', 'cyrillic'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={roboto.className}>
      <Head>
        <title>Список товаров</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
