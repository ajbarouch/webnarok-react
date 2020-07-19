import React, { Component } from 'react'

 export default class Header extends Component {
    render() {
      return (
        <header id="header" className="fixed-top">
            <div className="container d-flex">
                <div className="logo mr-auto">
                    <h1 className="text-light"><a href="index.html">Webnarok</a></h1>
                </div>
                <nav className="nav-menu d-none d-lg-block">
                    <ul>
                    <li className="active"><a href="index.html">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#steps">Steps</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
      )
    }
  }
