import React from 'react';
import { Global, css } from '@emotion/core';
import App, { Container } from 'next/app';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Global
          styles={css`
            body {
              color: #073642;
              background-color: #fdf6e3;
              font-size: 15px;
              scroll-behavior: smooth;
              @media (max-width: 800px) {
                font-size: 14px;
              }
              @media (max-width: 500px) {
                font-size: 12px;
              }
            }
            p {
              margin-top: 0.3em;
              margin-bottom: 0.3em;
              width: 100%;
            }
            .green {
              color: #859900;
              font-size: 1.1em;
              padding: 2px;
            }
            .red {
              color: #dc322f;
              font-size: 1.1em;
              padding: 2px;
            }
          `}
        />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
