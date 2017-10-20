import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from './components/Checkbox';
import RadioButton from './components/RadioButton';
import Button from './components/Button';
import Badge from './components/Badge';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Badge value="haha" />
      </div>
    );
  }
}

export default App;
