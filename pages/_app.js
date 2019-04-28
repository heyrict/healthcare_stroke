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
            }
          `}
        />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
