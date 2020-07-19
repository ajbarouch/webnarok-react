import React, { Component } from 'react'


export default class Contact extends Component {
    render() {
      return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                <h2>Contact</h2>
                <p>This is our favorite part of the job: getting to meet you.</p>
                </div>
                <div className="row mt-4 justify-content-center" data-aos="fade-up">
                <div className="col-lg-10">
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <div className="form-row">
                        <div className="col-md-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div className="validate" />
                        </div>
                        <div className="col-md-6 form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                        <div className="validate" />
                        </div>
                    </div>
                    <div className="form-group">
                        <select type="text" className="form-control" name="service" id="service" placeholder="Service">
                        <option disabled selected value> -- Select a Service -- </option>
                            <option value="development">Web Development</option>
                            <option value="design">Web Design</option>
                            <option value="ada">Web Accessibility</option>
                            <option value="seo">SEO</option>
                            <option value="notsure">Not Sure</option>
                        </select>
                        <div className="validate" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                        <div className="validate" />
                    </div>
                    <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div>
                </div>
            </div>
        </section>
      )
    }
  }
