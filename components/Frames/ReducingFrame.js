import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Box } from '../../common/components';
import { get_proba } from '../../common/model';
import NumberAnimation from '../../components/NumberAnimation';

const WarnIndicator = styled.span`
  color: rgb(${p => parseInt(55 + p.value * 2)}, 60, 60);
`;

const GreenIndicator = styled.span`
  color: rgb(
    60,
    ${p => Math.min(255, parseInt(55 + 30 * Math.sqrt(p.value)))},
    60
  );
`;

class ReducingFrame extends React.PureComponent {
  static propTypes = {
    formData: PropTypes.object.isRequired,
  };

  render() {
    if (!this.props.formData) return null;
    const bestParam = Object.assign({}, this.props.formData);
    const stroke_proba = get_proba(this.props.formData);
    const hasHT = Boolean(this.props.formData.hypertension);
    const hasHD = Boolean(this.props.formData.heart_disease);
    const badAGL = this.props.formData.avg_glucose_level > 100;
    const badBMI = this.props.formData.bmi > 25;
    const badSS = this.props.formData.smoking_status === 3;

    if (hasHT) {
      bestParam.hypertension = 0.5;
    }
    if (hasHD) {
      bestParam.heart_disease = 0.5;
    }
    if (badAGL) {
      bestParam.avg_glucose_level = 80;
    }
    if (badBMI) {
      bestParam.bmi = 20;
    }
    if (badSS) {
      bestParam.smoking_status = 2;
    }

    const after_proba = get_proba(bestParam);
    const risk_reduce_delay = 1200;

    return (
      <React.Fragment>
        <Box>
          <Box style={{ fontWeight: 'bold' }}>
            你将来会发生中风的可能性 ={' '}
            <div style={{ width: '60px', display: 'inline-block' }}>
              <NumberAnimation from={0} to={stroke_proba}>
                {number => (
                  <WarnIndicator value={number}>{number}</WarnIndicator>
                )}
              </NumberAnimation>
            </div>
            %
          </Box>
          {after_proba < stroke_proba && (
            <Box>
              你可以至少降低
              <b style={{ margin: '5px' }}>
                <div style={{ width: '60px', display: 'inline-block' }}>
                  <NumberAnimation
                    from={0}
                    to={stroke_proba - after_proba}
                    delay={risk_reduce_delay}
                  >
                    {number => (
                      <GreenIndicator value={number}>{number}</GreenIndicator>
                    )}
                  </NumberAnimation>
                </div>
                %
              </b>
              的中风风险, <Box>如果你:</Box>
              <Box ml={4}>
                <ol>
                  {hasHT && (
                    <li>
                      <a href="#ht1">控制血压处于合理水平</a> ({' '}
                      <NumberAnimation
                        from={0}
                        to={
                          stroke_proba -
                          get_proba({
                            ...this.props.formData,
                            hypertension: 0.5,
                          })
                        }
                      >
                        {number => (
                          <GreenIndicator value={number}>
                            {number}
                          </GreenIndicator>
                        )}
                      </NumberAnimation>
                      % )
                    </li>
                  )}
                  {badAGL && (
                    <li>
                      <a href="#agl1">控制血糖处于合理水平</a> ({' '}
                      <NumberAnimation
                        from={0}
                        to={
                          stroke_proba -
                          get_proba({
                            ...this.props.formData,
                            avg_glucose_level: 80,
                          })
                        }
                      >
                        {number => (
                          <GreenIndicator value={number}>
                            {number}
                          </GreenIndicator>
                        )}
                      </NumberAnimation>
                      % )
                    </li>
                  )}
                  {badSS && (
                    <li>
                      <a href="#smoke1">戒烟</a> ({' '}
                      <NumberAnimation
                        from={0}
                        to={
                          stroke_proba -
                          get_proba({
                            ...this.props.formData,
                            smoking_status: 2,
                          })
                        }
                      >
                        {number => (
                          <GreenIndicator value={number}>
                            {number}
                          </GreenIndicator>
                        )}
                      </NumberAnimation>
                      % )
                    </li>
                  )}
                  {badBMI && (
                    <li>
                      <a href="#bmi1">合理控制体重</a> ({' '}
                      <NumberAnimation
                        from={0}
                        to={
                          stroke_proba -
                          get_proba({
                            ...this.props.formData,
                            bmi: 20,
                          })
                        }
                      >
                        {number => (
                          <GreenIndicator value={number}>
                            {number}
                          </GreenIndicator>
                        )}
                      </NumberAnimation>
                      % )
                    </li>
                  )}
                </ol>
              </Box>
            </Box>
          )}
        </Box>
      </React.Fragment>
    );
  }
}

export default ReducingFrame;
