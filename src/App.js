import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import FilmsSearch from './components/FilmsSearch';
import FilmsResults from './components/FilmsResults';
import { Router } from '@reach/router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Router>
          <Home path="/" />
          <FilmsSearch path="/films" />
          <FilmsResults path="/films/:id" />
          <About path="/about" />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
