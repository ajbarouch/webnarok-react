import React, { Component } from 'react'


export default class About extends Component {
    render() {
      return (
        <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7" data-aos="fade-right">
              <img src="assets/img/about-img.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-xl-6 col-lg-5 pt-5 pt-lg-0">
              <h3 data-aos="fade-up">Est 2013</h3>
              <p data-aos="fade-up">
                For over 7 years, we've been providing much needed web answers to various web questions.
              </p>
              <div className="icon-box" data-aos="fade-up">
                <i className="bx bxs-plus-circle" />
                <h4>What you want, we've got</h4>
                <p>We tackle various technologies such as Wordpress, Drupal, ReactJS, Shopify and many many more.</p>
              </div>
              <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                <i className="bx bxs-check-circle" />
                <h4>Always thinking ahead</h4>
                <p>When it comes to code, we look to the long-term. Everything we do is search engine optimized and accessible so that your content can reach everyone.</p>
              </div>
              <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                <i className="bx bxs-heart-circle" />
                <h4>We're with you</h4>
                <p>We believe that with great products come great responsibility. We're here to help you determine what web solution will serve you best.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      )
    }
  }