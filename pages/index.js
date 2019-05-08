import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';

import { predict_proba, get_proba } from '../common/model';
import { Box, Flex } from '../common/components';
import Form from '../components/Form';
import {
  Frame,
  ReducingFrame,
  AGL1Frame,
  AGL2Frame,
  AGL3Frame,
} from '../components/Frames';

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

    const badAGL = this.formData.avg_glucose_level > 100;

    return (
      <Page>
        <Head>
          <title>你未来会发生中风的可能性有多少？</title>
        </Head>
        <Header>你未来会发生中风的可能性有多少？</Header>
        <Form onSubmit={this.handleSubmit} disabled={this.state.showResults} />
        {this.state.showResults && this.formData && (
          <React.Fragment>
            <Frame id="result" ref={this.mainResultRef} disableLeft>
              <ReducingFrame formData={this.formData} />
            </Frame>
            {badAGL && (
              <Frame id="agl1" justifyContent="left">
                <AGL1Frame />
              </Frame>
            )}
            {badAGL && (
              <Frame id="agl2" justifyContent="left">
                <AGL2Frame />
              </Frame>
            )}
            {badAGL && (
              <Frame id="agl3" justifyContent="left">
                <AGL3Frame />
              </Frame>
            )}
            <Frame disableRight>
              Disclaimer: Right to the stroke data used for prediction belongs
              to respective owners (McKinsey & Company and Analytics Vidhya)
            </Frame>
          </React.Fragment>
        )}
      </Page>
    );
  }
}

export default Index;
