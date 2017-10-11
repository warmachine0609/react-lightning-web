import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.div`
	width: 16px;
	position: relative;
	margin: 20px auto;
	label {
	width: 16px;
	height: 16px;
	cursor: pointer;
	position: absolute;
	top: 0;
	left: 0;
	background: ${props => 
		props.dark ? '#000000' : 
		props.success ? '#FFFFFF' : 
		props.warning ? '#FFFFFF' :
		'#FFFFFF'
	};
	border-radius: 2px;
	border: 1px solid #D8DDE6;
	// box-shadow: inset 0px 1px 1px rgba(0,0,0,0.5), 0px 1px 1px rgba(255,255,255,.4);
	&:after {
		content: '';
		width: 7px;
		height: 4px;
		position: absolute;
		top: 4px;
		left: 4px;
		border: 2px solid ${props =>
								props.dark ? '#FFFFFF' :
								props.success ? 'green' :
								props.warning ? 'red' : 
								'#000000'
							};
		border-top: none;
		border-right: none;
		background: transparent;
		opacity: 0;
		transform: rotate(-45deg);
	}
	&:hover::after {
		opacity: 0.3;
	}
	}
	input[type=checkbox] {
		visibility: hidden;
		&:checked + label:after {
		  opacity: 1;
		} 
	}
`;

class Checkbox extends Component {
	render(){
		return (
			<Input warning>
				<input type="checkbox" id="squaredThree" value={this.props.value} name={this.props.name} checked={this.props.checked} />
				<label for="squaredThree"></label>
			</Input>
		);
	}
}

export default Checkbox;