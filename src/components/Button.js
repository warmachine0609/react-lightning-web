import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.button`
	background-color:#0070d2;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:sans-serif;
	font-size: ${props => 
		props.fontSize ? props.fontSize : 12
	}px;
	padding: 8px 16px 9px 16px;
	text-decoration:none;
	border: 0;
	border-radius: 0;
	outline: none;
	&:hover{
		background-color:#0088ff;
	}
`;

class Button extends Component {
	render(){
		return (
			<Input fontSize="20">
				{this.props.value}
			</Input>
		);
	}
}

export default Button;