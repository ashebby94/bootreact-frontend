import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, NavLink} from 'react-router-dom';
import Layout from '../src/components/Layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">DDOS Collector</h1>
            <nav className="nav">
              <ul>
                <li><NavLink to="/" exact>HOME</NavLink></li>
                <li><NavLink to="/addComputer">ADD COMPUTER</NavLink></li>
              </ul>
            </nav>
          </header>
          <div className="container">
            <Layout/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
