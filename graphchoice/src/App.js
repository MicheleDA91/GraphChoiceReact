import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './components/Bar';
import LineChart from './components/Line';
import DoughnutChart from './components/Doughnut';


class App extends Component {
  

  render() {
    return (
      <div>
         <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         </header>
       
      </div>
    );
  }
}

export default App;