import React, { Component } from 'react'


export default class Services extends Component {
    render() {
      return (
        <section id="services" className="services section-bg">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                <h2>Services</h2>
                <p>See below for a gereralization of what we can do for you. Don't see what you're looking for? It's still very likely we can take it on. <a href="#contact" class="scrollto">Let's chat.</a></p>
                </div>
                <div className="row">
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up">
                    <div className="icon-box icon-box-blue">
                    <div className="icon"><i className="bx bxs-keyboard" /></div>
                    <h4 className="title"><a href="#">Web Development</a></h4>
                    <p className="description">This is our bread and butter. We can deliver on a wide variety of technologies and languages.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay={100}>
                    <div className="icon-box icon-box-blue">
                    <div className="icon"><i className="bx bxs-brush" /></div>
                    <h4 className="title"><a href="#">Web Design</a></h4>
                    <p className="description">Need some creative flair? We've got you covered with design for websites, apps, logos and more.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay={200}>
                    <div className="icon-box icon-box-blue">
                    <div className="icon"><i className="bx bxs-devices" /></div>
                    <h4 className="title"><a href="#">Web Accessibility</a></h4>
                    <p className="description">The internet is better when everybody can use it. We can help with ADA/WCAG audits and repair.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay={300}>
                    <div className="icon-box icon-box-blue">
                    <div className="icon"><i className="bx bxs-search" /></div>
                    <h4 className="title"><a href="#">SEO</a></h4>
                    <p className="description">Everything we do, we do for search engine optimization. We can help with site speed too!</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
      )
    }
  }

