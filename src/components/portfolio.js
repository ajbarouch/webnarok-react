import React, { Component } from 'react'


export default class Portfolio extends Component {
    render() {
      return (

    <section id="portfolio" className="portfolio section-bg">
        <div className="container">
            <div className="section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>Check out a selection of projects we've completed in the past. Hopefully, yours can be next!</p>
            </div>
            <div className="row" data-aos="fade-up">
                <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                        <li data-filter="*" className="filter-active">All</li>
                        <li data-filter=".filter-ada">ADA</li>
                        <li data-filter=".filter-dev">DEV/DES</li>
                        <li data-filter=".filter-e-com">E-COMMERCE</li>
                    </ul>
                </div>
            </div>
            <div className="row portfolio-container" data-aos="fade-up">
                <div className="col-lg-4 col-md-6 portfolio-item filter-ada">
                    <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/foxrc.png" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Fox Restaurant Concepts</h4>
                            <p>ADA audit and repair</p>
                            <div className="portfolio-links">
                            <a target="_blank" href="https://www.foxrc.com/" title="Fox Restaurant Concepts"><i className="bx bx-link" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-dev">
                    <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/audioeye.png" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>AudioEye</h4>
                            <p>Web Development and Design</p>
                            <div className="portfolio-links">
                            <a target="_blank" href="https://www.audioeye.com/" title="AudioEye"><i className="bx bx-link" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-e-com">
                    <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/wws.png" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Woodworkers Source</h4>
                            <p>Miva E-Commerce Development</p>
                            <div className="portfolio-links">
                            <a target="_blank" href="https://www.woodworkerssource.com/" title="Woodworkers Source"><i className="bx bx-link" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-ada">
                    <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/mayo.png" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Mayo - ASU Partnership</h4>
                            <p>ADA audit and repair</p>
                            <div className="portfolio-links">
                            <a target="_blank" href="https://mayo.asu.edu/" title="Mayo - ASU"><i className="bx bx-link" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-e-com">
                    <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/lehigh.png" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Lehigh Defense</h4>
                            <p>Opencart Development and Design</p>
                            <div className="portfolio-links">
                            <a target="_blank" href="https://mayo.asu.edu/" title="Mayo - ASU"><i className="bx bx-link" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-dev">
                    <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/transportation.png" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Transportation - ASU </h4>
                            <p>Drupal Development and Design</p>
                            <div className="portfolio-links">
                            <a target="_blank" href="https://mayo.asu.edu/" title="Mayo - ASU"><i className="bx bx-link" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
      )
    }
  }

