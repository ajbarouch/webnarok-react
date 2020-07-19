import React, { Component } from 'react'


export default class Steps extends Component {
    render() {
      return (
        <section id="steps" className="steps section-bg">
            <div className="container">
                <div className="row no-gutters">
                <div className="col-lg-4 col-md-6 content-item" data-aos="fade-in">
                    <span>01</span>
                    <h4>Drop us a line</h4>
                    <p><a href="#contact" class="scrollto">Get in touch</a> with us to chat about what you need.</p>
                </div>
                <div className="col-lg-4 col-md-6 content-item" data-aos="fade-in" data-aos-delay={100}>
                    <span>02</span>
                    <h4>Spelling it out</h4>
                    <p>After determining what technologies and scope you will require, we will provide a detailed outline of our plan to make that happen.</p>
                </div>
                <div className="col-lg-4 col-md-6 content-item" data-aos="fade-in" data-aos-delay={200}>
                    <span>03</span>
                    <h4>Getting started</h4>
                    <p>We kick off every project with a one-on-one discussion about timelines and expectations.</p>
                </div>
                <div className="col-lg-4 col-md-6 content-item" data-aos="fade-in" data-aos-delay={300}>
                    <span>04</span>
                    <h4>Nose to the grindstone</h4>
                    <p>Here's the fun part. We finally get to code.</p>
                </div>
                <div className="col-lg-4 col-md-6 content-item" data-aos="fade-in" data-aos-delay={400}>
                    <span>05</span>
                    <h4>Checking in</h4>
                    <p>Constant internal QA and regular updates are integral to us. When we're nearly complete, we'll chat about how best to launch your project.</p>
                </div>
                <div className="col-lg-4 col-md-6 content-item" data-aos="fade-in" data-aos-delay={500}>
                    <span>06</span>
                    <h4>Pop the Champagne!</h4>
                    <p>Everything is completed to your satisfation and given the rubber stamp of approval. We offer a one-year bug-free guarantee on all of our code as well as ongoing services such as maintenance and monitoring.</p>
                </div>
                </div>
            </div>
        </section>
      )
    }
  }


