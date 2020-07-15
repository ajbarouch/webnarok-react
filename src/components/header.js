import React, { Component } from 'react'

 export default class Header extends Component {
    render() {
      return (
        <header id="header" className="fixed-top">
            <div className="container d-flex">
                <div className="logo mr-auto">
                    <h1 className="text-light"><a href="index.html">Maxim</a></h1>
                </div>
                <nav className="nav-menu d-none d-lg-block">
                    <ul>
                    <li className="active"><a href="index.html">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li className="drop-down"><a href="#">Drop Down</a>
                        <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li className="drop-down"><a href="#">Drop Down 2</a>
                            <ul>
                            <li><a href="#">Deep Drop Down 1</a></li>
                            <li><a href="#">Deep Drop Down 2</a></li>
                            <li><a href="#">Deep Drop Down 3</a></li>
                            <li><a href="#">Deep Drop Down 4</a></li>
                            <li><a href="#">Deep Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Drop Down 3</a></li>
                        <li><a href="#">Drop Down 4</a></li>
                        <li><a href="#">Drop Down 5</a></li>
                        </ul>
                    </li>
                    <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
      )
    }
  }
