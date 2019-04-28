import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';

import { predict_proba, get_proba } from '../common/model';
import { Box, Flex } from '../common/components';
import Form from '../components/Form';
import ReducingFrame from '../components/ReducingFrame';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 10px;
  @media (min-width: 800px) {
    width: 80%;
  }
`;

const Header = styled.div`
  display: flex;
  font-size: 2em;
  padding: 1em 0;
`;

const Frame = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

class Index extends React.Component {
  state = {
    showResults: false,
  };
  formData = {};
  mainResultRef = React.createRef();

  handleSubmit = results => {
    this.formData = results;
    this.setState({ showResults: true });
    window.setTimeout(() => {
      if (this.mainResultRef) {
        this.mainResultRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  };

  render() {
    const stroke_proba = get_proba(this.formData);
    return (
      <Page>
        <Head>
          <title>你未来会发生中风的可能性有多少？</title>
        </Head>
        <Header>你未来会发生中风的可能性有多少？</Header>
        <Form onSubmit={this.handleSubmit} disabled={this.state.showResults} />
        {this.state.showResults && this.formData && (
          <React.Fragment>
            <Frame id="result" ref={this.mainResultRef}>
              <ReducingFrame formData={this.formData} />
            </Frame>
            <Frame>... 其他可能的预防方法（每位同学一篇的短文）</Frame>
          </React.Fragment>
        )}
      </Page>
    );
  }
}

export default Index;
