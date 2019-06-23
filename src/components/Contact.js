import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <div>
  {/* begin menu */}
  <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="index.html">React Router - News</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="tintuc.html">Tin tức</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="chitiet.html">Tin chi tiết</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* end menu */}
  <header className="masthead tintuc">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-12 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-1 text-center">Trang Lien he</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* begin contact */}
  <section className="page-section" id="contact">
    <div className="container">
      {/* Contact Section Heading */}
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Liên hệ với chúng tôi</h2>
      {/* Icon Divider */}
      <div className="divider-custom">
        <div className="divider-custom-line" />
        <div className="divider-custom-icon">
          <i className="fas fa-star" />
        </div>
        <div className="divider-custom-line" />
      </div>
      {/* Contact Section Form */}
      <div className="row">
        <div className="col-lg-8 mx-auto">
          {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
          <form name="sentMessage" id="contactForm" noValidate="novalidate">
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Name</label>
                <input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Email Address</label>
                <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Phone Number</label>
                <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Message</label>
                <textarea className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                <p className="help-block text-danger" />
              </div>
            </div>
            <br />
            <div id="success" />
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* end contact */}
</div>

            </div>
        );
    }
}

export default Contact;