import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from './components/Checkbox';
import RadioButton from './components/RadioButton';
import Button from './components/Button';
import Badge from './components/Badge';
import TextArea from './components/TextArea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Badge value="haha" />
        <br />
        <TextArea label="Label" placeholder="Default Placeholder" />
      </div>
    );
  }
}

export default App;
