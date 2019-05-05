import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Box, Flex, Button } from '../common/components';
import { space } from 'styled-system';

const data = {
  gender: 1, // M = 0, F = 1, O = 2
  age: 58,
  hypertension: 1,
  heart_disease: 0,
  ever_married: 1, // N = 0, Y = 1
  work_type: 1, // C = 0, P = 1, N = 2, S = 3, G = 4
  residence_type: 1, // R = 0, U = 1
  avg_glucose_level: 87.96,
  bmi: 39.2,
  smoking_status: 1, // null = 0, N = 1, F = 2, S = 3
};

const Label = styled.label`
  display: block;
  word-wrap: break-word;
  margin: 5px;
  width: 160px;
`;

const Input = styled.input`
  display: block;
  padding: 5px;
  border-radius: 5px;
  border-style: ridge;
  min-width: 100px;
  max-width: 120px;
  width: 50%;
  margin: 5px;
  margin-right: 10px;
`;

const Select = styled.select`
  display: block;
  padding: 2px;
  min-width: 100px;
  width: 50%;
  margin: 5px;
  margin-right: 10px;
`;

const FormBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1em;
  margin: 1em 0;
`;

class Form extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  };

  state = {
    gender: '',
    age: '',
    hypertension: '',
    heart_disease: '',
    ever_married: '',
    work_type: '',
    residence_type: '',
    avg_glucose_level: '',
    bmi: '',
    smoking_status: '',
  };

  handleSubmit = () => {
    this.props.onSubmit({
      gender: parseInt(this.state.gender, 10),
      age: parseInt(this.state.age, 10),
      hypertension: parseInt(this.state.hypertension, 10),
      heart_disease: parseInt(this.state.heart_disease, 10),
      ever_married: parseInt(this.state.ever_married, 10),
      work_type: parseInt(this.state.work_type, 10),
      residence_type: parseInt(this.state.residence_type, 10),
      avg_glucose_level: parseFloat(this.state.avg_glucose_level, 10),
      bmi: parseFloat(this.state.bmi, 10),
      smoking_status: parseInt(this.state.smoking_status, 10),
    });
  };

  render() {
    return (
      <FormBody>
        <Flex width={[1, 1 / 2]}>
          <Label>性别</Label>
          <Select
            name="gender"
            value={this.state.gender}
            onChange={e => this.setState({ gender: e.target.value })}
            disabled={this.props.disabled}
          >
            <option />
            <option value={0}>男</option>
            <option value={1}>女</option>
            <option value={2}>其他</option>
          </Select>
        </Flex>
        <Flex width={[1, 1 / 2]}>
          <Label>年龄</Label>
          <Input
            name="age"
            type="number"
            value={this.state.age}
            onChange={e => this.setState({ age: e.target.value })}
            disabled={this.props.disabled}
          />
        </Flex>
        <Flex width={[1, 1 / 2]}>
          <Label>患有高血压</Label>
          <Select
            name="hypertension"
            value={this.state.hypertension}
            onChange={e => this.setState({ hypertension: e.target.value })}
            disabled={this.props.disabled}
          >
            <option />
            <option value={0}>否</option>
            <option value={1}>是</option>
          </Select>
        </Flex>
        <Flex width={[1, 1 / 2]}>
          <Label>患有心脏病</Label>
          <Select
            name="heart_disease"
            value={this.state.heart_disease}
            onChange={e => this.setState({ heart_disease: e.target.value })}
            disabled={this.props.disabled}
          >
            <option />
            <option value={0}>否</option>
            <option value={1}>是</option>
          </Select>
        </Flex>
        <Flex width={[1, 1 / 2]}>
          <Label>已婚</Label>
          <Select
            name="ever_married"
            value={this.state.ever_married}
            onChange={e => this.setState({ ever_married: e.target.value })}
            disabled={this.props.disabled}
          >
            <option />
            <option value={0}>否</option>
            <option value={1}>是</option>
          </Select>
        </Flex>
        <Flex width={[1, 1 / 2]}>
          <Label>工作类型</Label>
          <Select
            name="work_type"
            value={this.state.work_type}
            onChange={e => this.setState({ work_type: e.target.value })}
            disabled={this.props.disabled}
          >
            <option />
            <option value={0}>儿童</option>
            <option value={1}>企业工作</option>
            <option value={2}>从未工作</option>
            <option value={3}>创业</option>
            <option value={4}>政府工作</option>
          </Select>
        </Flex>
        <Flex width={[1, 1 / 2]}>
          <Label>居住地</Label>
          <Select
            name="residence_type"
            value={this.state.residence_type}
            onChange={e => this.setState({ residence_type: e.target.value })}
            disabled={this.props.disabled}
          >
            <option />
            <option value={0}>农村</option>
            <option value={1}>城市</option>
          </Select>
        </Flex>
        <Flex width={[1, 1 / 2]}>
          <Label>平均血糖值</Label>
          <Input
            name="avg_glucose_level"
            type="number"
            step={0.01}
            value={this.state.avg_glucose_level}
            onChange={e => this.setState({ avg_glucose_level: e.target.value })}
            disabled={this.props.disabled}
          />
          <div style={{ alignSelf: 'center', marginRight: '10px' }}>mg/dL</div>
        </Flex>
        <Flex width={[1, 1 / 2]}>
          <Label>BMI</Label>
          <Input
            name="bmi"
            type="number"
            step={0.01}
            value={this.state.bmi}
            onChange={e => this.setState({ bmi: e.target.value })}
            disabled={this.props.disabled}
          />
        </Flex>
        <Flex width={[1, 1 / 2]}>
          <Label>吸烟</Label>
          <Select
            name="smoking_status"
            value={this.state.smoking_status}
            onChange={e => this.setState({ smoking_status: e.target.value })}
            disabled={this.props.disabled}
          >
            <option />
            <option value={1}>从未吸烟</option>
            <option value={2}>曾吸烟但已戒断</option>
            <option value={3}>吸烟</option>
          </Select>
        </Flex>
        <Button width={1} onClick={() => this.setState(data)}>
          Load Sample Data
        </Button>
        <Button
          width={1}
          onClick={this.handleSubmit}
          disabled={
            this.props.disabled ||
            this.state.gender === '' ||
            this.state.age === '' ||
            this.state.hypertension === '' ||
            this.state.heart_disease === '' ||
            this.state.ever_married === '' ||
            this.state.work_type === '' ||
            this.state.residence_type === '' ||
            this.state.avg_glucose_level === '' ||
            this.state.bmi === '' ||
            this.state.smoking_status === ''
          }
        >
          开始预测
        </Button>
      </FormBody>
    );
  }
}

export default Form;
