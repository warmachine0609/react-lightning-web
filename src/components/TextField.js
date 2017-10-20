import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    background-color: white;
    border: 1px solid #dddbda;
    border-radius: 0.25rem;
    width: 100%;
    transition: border 0.1s linear, background-color 0.1s linear;
    display: inline-block;
    padding: 0 1rem 0 0.75rem;
    line-height: 1.875rem;

    &:placeholder {
        color: #706e6b;
        font-weight: 400;
        font-size: 0.8125rem;
    }
`;

const Label = styled.label`
    display: inline-block;
    color: #706e6b;
    font-size: 0.75rem;
    line-height: 1.5;
    margin-right: 0.75rem;
    margin-bottom: 0.125rem;
`;

class TextField extends Component {
	render(){
		return ([
            <Label key='1'> {this.props.text} </Label>,
            <Input key='2' placeholder={this.props.placeholder} type="text" />
        ]);
	}
}

export default TextField;