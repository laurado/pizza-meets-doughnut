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

  setCurrentLaura = () => {
    const [first, ...rest] = this.state.discoverLauras;
    this.setState({
      discoverLauras: rest,
      currentLaura: first,
    });
  }

  onLike = () => {
    const newMatchedLauras = [this.state.currentLaura, ...this.state.matchedLauras];
    this.setState({
      matchedLauras: newMatchedLauras
    });
    this.setCurrentLaura();
  }

  render() {
    // TODO: add loading state when currentLaura is empty

    return (
      <div className="App">
        <header>
          pizza meets doughnut
        </header>
        <div className='discover-container'>
          {this.state.currentLaura ?
            <div>
              <p>{this.state.currentLaura.name}</p>
              <button onClick={this.onLike}>
                heart
              </button>
            </div> :
            <div>
              You've matched with all the Lauras
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
