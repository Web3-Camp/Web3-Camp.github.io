import React from "react";
import Head from "next/head";
import { NextPage } from 'next'
import { ReactNode,ComponentType,ReactElement } from 'react';

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'

export type Page<P = {}> = NextPage<P> & {
  // You can disable whichever you don't need
  getLayout?: (page: ReactElement) => ReactNode
  layout?: ComponentType
}

type IAppProps = AppProps & {
  Component: Page
}

function MyApp({ Component, pageProps }: IAppProps) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page)
  return  <>
    <Head>
      <title>web3-camp</title>
      <meta name="description" content="web3 Camp" />
      <link rel="icon" href="./favicon.ico" />
    </Head>
    {getLayout(<Component {...pageProps} />)}
  </>
}

export default MyApp
