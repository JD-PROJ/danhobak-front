/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { breakPoints } from '../ui';

const AppWrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${breakPoints.medium}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${breakPoints.medium}) {
    display: none;
  }
  font-size: 2rem;
`;

const MainWrapper = styled.div`
  @media (max-width: ${breakPoints.medium}) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right, #ffe259, #ffa751);
  }
`;

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <AppWrapper>
    <Head>
      <title>단호박마켓</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap"
        rel="stylesheet"
      />
      <style>{`* {padding: 0; margin: 0;font-family: 'Gothic A1', sans-serif;} a {text-decoration: none;}`}</style>
    </Head>
    <IntroWrapper>✨</IntroWrapper>
    <MainWrapper>
      <Component {...pageProps} />
    </MainWrapper>
  </AppWrapper>
);

export default App;
