import React, { Component } from 'react';
import styled from 'styled-components';
import Label from './Label';

const TextAreaStyle = styled.textarea`
  background: #ffffff;
  border: 1px solid #d8dde6;
  border-radius: 4px;
  padding-top: 11px;
  padding-left: 12px;
  font-family: SalesforceSans-Regular;
  font-size: 13px;
  color: #16325c;
  letter-spacing: 0;
  ::placeholder {
    font-family: SalesforceSans-Regular;
    font-size: 13px;
    color: #16325c;
    letter-spacing: 0;
  }
`;

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: left;
`;

const LabelContainer = styled.div`padding-bottom: 6px;`;

class TextArea extends Component {
  render() {
    return (
      <Container>
        {this.props.label && (
          <LabelContainer>
            <Label value={this.props.label} />
          </LabelContainer>
        )}
        <TextAreaStyle
          placeholder={this.props.placeholder}
          rows={this.props.rows}
          cols={this.props.cols}
          defaultValue={this.props.value}
        />
      </Container>
    );
  }
}

export default TextArea;
