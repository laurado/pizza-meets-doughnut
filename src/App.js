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
      showMatches: false,
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

  toggleDiscoverView = () => {
    this.setState({
      showMatches: false
    });
  }

  toggleMatchesView = () => {
    this.setState({
      showMatches: true
    });
  }

  render() {
    // TODO: add loading state when currentLaura is empty
    const matches = this.state.matchedLauras.map((match) => {
      return (
        <div key={match.id}>
          {match.name}
        </div>
      )
    })

    return (
      <div className="App">
        <header>
          pizza meets doughnut
        </header>
        {this.state.showMatches ?
          <div className='matches-container'>
            {this.state.matchedLauras.length > 0 ?
              matches :
              <div>
                You have no matches yet
              </div>
            }
          </div> :
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
        }
        <nav>
          <button onClick={this.toggleDiscoverView}>discover</button>
          <button onClick={this.toggleMatchesView}>matches</button>
        </nav>
      </div>
    );
  }
}

export default App;
