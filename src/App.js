import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Personal from './components/Personal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Personal />
      </div>
    )
  }
}


export default App;
