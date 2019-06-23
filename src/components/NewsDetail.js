import React, { Component } from 'react';

class NewsDetail extends Component {
    render() {
        return (
            <div>
                <div>
  {/* begin menu */}
  <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="index.html">React Router - News</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="/navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
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
            <h1 className="mb-1 text-center">Trang chi tiet tin</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* begin tintuc */}
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <img src="http://placehold.it/1900x700" className="img-fluid " alt="NewsDetail Image" />
      <p className="lead">Jumbo helper text</p>
      <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat a vel blanditiis unde ad ex incidunt, voluptatem officia nulla architecto molestias nesciunt est aperiam corrupti ipsam! Ipsum eius unde explicabo.</p>
      <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat a vel blanditiis unde ad ex incidunt, voluptatem officia nulla architecto molestias nesciunt est aperiam corrupti ipsam! Ipsum eius unde explicabo.</p>
      <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat a vel blanditiis unde ad ex incidunt, voluptatem officia nulla architecto molestias nesciunt est aperiam corrupti ipsam! Ipsum eius unde explicabo.</p>
      <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat a vel blanditiis unde ad ex incidunt, voluptatem officia nulla architecto molestias nesciunt est aperiam corrupti ipsam! Ipsum eius unde explicabo.</p>
      <hr className="my-2" />
      <p>More info</p>
    </div>
  </div>
  <div className="container">                        
    <h4 className="card-title text-center">Tin lien quan</h4>
    <div className="row">
      <div className="col-12">
        <div className="card-deck">
          <div className="card">
            <a href="chitiet.html"><img className="card-img-top" src="http://placehold.it/500x300" alt="NewsDetail Image" /></a>
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nobis rerum sint laborum natus maxime laboriosam reprehenderit quis reiciendis ipsa nam recusandae, assumenda quibusdam officiis ea quam facilis, molestiae fugiat.</p>
            </div>
          </div>
          <div className="card">
            <a href="chitiet.html"><img className="card-img-top" src="http://placehold.it/500x300" alt="NewsDetail Image" /></a>
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nobis rerum sint laborum natus maxime laboriosam reprehenderit quis reiciendis ipsa nam recusandae, assumenda quibusdam officiis ea quam facilis, molestiae fugiat.</p>
            </div>
          </div>
          <div className="card">
            <a href="chitiet.html"><img className="card-img-top" src="http://placehold.it/500x300" alt="NewsDetail Image" /></a>
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nobis rerum sint laborum natus maxime laboriosam reprehenderit quis reiciendis ipsa nam recusandae, assumenda quibusdam officiis ea quam facilis, molestiae fugiat.</p>
            </div>
          </div>
          <div className="card">
            <a href="chitiet.html"><img className="card-img-top" src="http://placehold.it/500x300" alt="NewsDetail Image" /></a>
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nobis rerum sint laborum natus maxime laboriosam reprehenderit quis reiciendis ipsa nam recusandae, assumenda quibusdam officiis ea quam facilis, molestiae fugiat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end tintuc */}
</div>

            </div>
        );
    }
}

export default NewsDetail;