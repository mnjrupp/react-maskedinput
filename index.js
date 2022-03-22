import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Select from 'react-select';
import MaskedInput from 'react-maskedinput';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

class App extends React.Component {
  state = {
    selectedOption: { value: 'vanilla', label: 'Vanilla' },
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

render(<App />, document.getElementById('root'));
