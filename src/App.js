import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from './components/Checkbox';
import RadioButton from './components/RadioButton';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RadioButton value="haha" />
      </div>
    );
  }
}

export default App;
