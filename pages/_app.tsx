/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { AppProps } from 'next/app';
import Head from 'next/head';

const AppStyle = css`
  display: grid;
`;

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <div css={AppStyle}>
    <Head>
      <title>단호박마켓</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap"
        rel="stylesheet"
      ></link>
      <style>{`* {padding: 0; margin: 0;font-family: 'Nanum Gothic', sans-serif;}`}</style>
    </Head>
    <Component {...pageProps} />
  </div>
);

export default App;
