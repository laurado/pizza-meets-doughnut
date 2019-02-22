import React, { Component } from 'react';
import './App.css';
import lauras from './lauras';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLaura: {},
      discoverLauras: lauras,
      matchedLauras: [],
    };
  }

  componentDidMount() {
    this.setCurrentLaura();
  }

  setCurrentLaura() {
    if(this.state.discoverLauras.length > 0) {
      const [first, ...rest] = this.state.discoverLauras;
      this.setState({
        discoverLauras: rest,
        currentLaura: first,
      })
    }
  }

  render() {
    // TODO: add loading state when currentLaura is empty

    return (
      <div className="App">
        <header>
          pizza meets doughnut
        </header>
        <div className='discover-container'>
          <p>{this.state.currentLaura.name}</p>
        </div>
      </div>
    );
  }
}

export default App;
