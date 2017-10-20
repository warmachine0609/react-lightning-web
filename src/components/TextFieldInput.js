import React, {Component} from 'react';
import styled from 'styled-components';

const Input = styled.div`
  width: ${props =>
  props.width ? props.width + 'px' :
    '200px'
  };
  position: relative;
	margin: 20px auto;
	label { 
	position: absolute;
	top: 0;
	left: 0;
	}
	label{
	color : #778899;
	}
	input{
	margin-top : 8px;
	width : 100%;
	height : 20px;
	padding : 3px 10px 3px 10px;
	font-size: 80%;
	border : 1px solid #778899;
	}
`;

class TextFieldInput extends Component {
  render() {
    return (
      <Input width={this.props.width}>
        {this.props.label && <div><label>{this.props.label}</label><br/></div>}
        <input type="text" placeholder={this.props.placeholder}/>
      </Input>
    );
  }
}

export default TextFieldInput;