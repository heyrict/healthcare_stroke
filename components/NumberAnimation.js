import React from 'react';
import PropTypes from 'prop-types';
import { round } from '../common/model';
import { Waypoint } from 'react-waypoint';

class NumberAnimation extends React.Component {
  static propTypes = {
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired,
    duration: PropTypes.number,
    delay: PropTypes.number,
    steps: PropTypes.number,
    children: PropTypes.node,
  };
  static defaultProps = {
    delay: 0,
    duration: 1000,
    steps: 60,
  };

  state = {
    number: 0,
  };
  currentStep = 0;
  intHandler = null;
  delHandler = null;

  handleEnter = () => {
    this.delHandler = window.setTimeout(() => {
      this.intHandler = window.setInterval(() => {
        if (this.currentStep >= this.props.steps) {
          this.currentStep = 0;
          window.clearInterval(this.intHandler);
          return;
        }
        this.currentStep += 1;
        this.setState({
          number: round(
            (this.props.to - this.props.from) *
              (this.currentStep / this.props.steps) +
              this.props.from,
          ),
        });
      }, this.props.duration / this.props.steps);
      this.delHandler = null;
    }, this.props.delay);
  };

  handleLeave = () => {
    this.currentStep = 0;
    if (this.delHandler) {
      window.clearInterval(this.delHandler);
      this.delHandler = null;
    }
    if (this.intHandler) {
      window.clearInterval(this.intHandler);
      this.intHandler = null;
    }
    this.setState({
      number: this.props.from,
    });
  };

  render() {
    if (this.props.children) {
      return (
        <React.Fragment>
          <Waypoint onEnter={this.handleEnter} onLeave={this.handleLeave} />
          {this.props.children(this.state.number)}
        </React.Fragment>
      );
    }

    return (
      <Waypoint onEnter={this.handleEnter} onLeave={this.handleLeave}>
        <span>{this.state.number}</span>
      </Waypoint>
    );
  }
}

export default NumberAnimation;
