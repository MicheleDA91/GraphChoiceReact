import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './components/Bar';
import LineChart from './components/Line';
import DoughnutChart from './components/Doughnut';
import RadarChart from './components/Radar';
import {Bootstrap, Container, Grid, Row, Col} from 'react-bootstrap' ; 
import { Bar } from 'react-chartjs-2';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'BarChart'};
  }
  
  handleChange = (event) =>
    this.setState({value: event.target.value});
  
  handleSubmit = (event) => {
    alert( this.state.value);
    event.preventDefault();
  }

  mostraGrafico = () => {
    return <BarChart />
  }
  

  render() {
        return (
        <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit"></option>
            <option value="lime">Lime</option>
            <option value="barre"> Grafico a barre</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;