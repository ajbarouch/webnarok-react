import React, { Component } from 'react';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Header from './components/header';
import Hero from './components/hero';
import Portfolio from './components/portfolio';
import Footer from './components/footer';
import Services from './components/services';
import Steps from './components/steps';


class App extends Component {
  render() {
    return (
      <div>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Steps></Steps>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
      <a href="#" className="back-to-top"><i className="icofont-simple-up" /></a>
      </div>
    );
  }
}

export default App;
