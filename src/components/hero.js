import React, { Component } from 'react'


export default class Hero extends Component {
    render() {
      return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="container text-center text-md-left" data-aos="fade-up">
        <h1>We Are Webnarok</h1>
        <h2>Common-sense solutions for complicated business needs</h2>
        <a href="#about" className="btn-get-started scrollto">What We're About</a>
        </div>
        </section>
      )
    }
  }
