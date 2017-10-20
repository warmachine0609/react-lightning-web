import React, { Component } from 'react';
import styled from 'styled-components';

const LabelStyles = styled.span`
  color: #000;
  padding-bottom: 6px;
  font-family: SalesforceSans-Regular;
  font-size: 12px;
  color: #54698d;
  letter-spacing: 0;
`;

class Label extends Component {
  render() {
    return <LabelStyles>{this.props.value}</LabelStyles>;
  }
}

export default Label;
