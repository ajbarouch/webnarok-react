import React, { Component } from 'react'


export default class Hero extends Component {
    render() {
      return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="container text-center text-md-left" data-aos="fade-up">
        <h1>Welcome to Webnarok</h1>
        <h2>Talented designers making websites with Bootstrap.</h2>
        <a href="#about" className="btn-get-started scrollto">Get Started</a>
        </div>
        </section>
      )
    }
  }
