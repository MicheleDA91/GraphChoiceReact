import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import BarChart from './components/Bar';
import LineChart from './components/Line';
import DoughnutChart from './components/Doughnut';
import RadarChart from './components/Radar';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: false };
  }

  handleChange = (event) =>
    this.setState({ value: event.target.value });


  render() {
    const value = this.state.value
    let grafico;

    if (value === 'barre') {
    grafico = (<div className= 'modal'><BarChart /></div>);
    } else if (value === 'linee') {
      grafico = (<div className= 'modal'><LineChart /></div>);
      } else if (value === 'torta') {
        grafico = (<div className= 'modal'><DoughnutChart /></div>);
       } else if (value === 'radar') {
       grafico = (<div className= 'modal'><RadarChart /></div>);
      }
       else { grafico = (null);
      }

    return (
      <div className='App'>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
          <div>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="torta">Grafico a torta</option>
          <option value="linee">Grafico a Linee</option>
          <option value="barre">Grafico a barre</option>
          <option value="radar">Grafico a radar</option>
        </select>
        {grafico}
      </div>
      </div>

    );
  }
}


export default App;