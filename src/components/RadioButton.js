import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.div`
	[type="radio"]:checked,
	[type="radio"]:not(:checked) {
	    position: absolute;
	    left: -9999px;
	}
	[type="radio"]:checked + label,
	[type="radio"]:not(:checked) + label
	{
	    position: relative;
	    padding-left: 28px;
	    cursor: pointer;
	    line-height: 18px;
	    display: inline-block;
	    color: #000000;
	}
	[type="radio"]:checked + label:before,
	[type="radio"]:not(:checked) + label:before {
	    content: '';
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: 16px;
	    height: 16px;
	    border: 1px solid #D8DDE6;
	    border-radius: 100%;
	    background: #fff;
	}
	[type="radio"]:checked + label:after,
	[type="radio"]:not(:checked) + label:after {
	    content: '';
	    width: 8px;
	    height: 8px;
	    background: #1589EE;
	    position: absolute;
	    top: 5px;
	    left: 5px;
	    border-radius: 100%;
	    -webkit-transition: all 0.2s ease;
	    transition: all 0.2s ease;
	}
	[type="radio"]:not(:checked) + label:after {
	    opacity: 0;
	    -webkit-transform: scale(0);
	    transform: scale(0);
	}
	[type="radio"]:checked + label:after {
	    opacity: 1;
	    -webkit-transform: scale(1);
	    transform: scale(1);
	}
`;

class RadioButton extends Component {
	render(){
		return (
			<Input>
				<input type="radio" id="squaredThree" value={this.props.value} name={this.props.name} checked={this.props.checked} />
				<label for="squaredThree">haha</label>
			</Input>
		);
	}
}

export default RadioButton;