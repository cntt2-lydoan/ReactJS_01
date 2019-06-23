import React, { Component } from 'react';

class News extends Component {
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
            <h1 className="mb-1 text-center">Trang danh sach tin</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* begin tintuc */}
  <div className="container">
    <div className="row mt-3">
      <div className="col-4">
        <div className="card-deck">
          <div className="card">
            <a href="chitiet.html"><img className="card-img-top" src="http://placehold.it/800x400" alt="App new"/></a>
            <div className="card-body">
              <h4 className="card-title"><a href="chitiet.html">Tin tuc so 1</a></h4>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aperiam incidunt dolorum blanditiis quidem enim autem, cum consectetur aut animi consequatur ad natus minima suscipit illo in, quo exercitationem dolores!</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="col-4">
        <div className="card-deck">
          <div className="card">
            <a href="chitiet.html"><img className="card-img-top" src="http://placehold.it/800x400" alt="App new"/></a>
            <div className="card-body">
              <h4 className="card-title"><a href="chitiet.html">Tin tuc so 2</a></h4>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aperiam incidunt dolorum blanditiis quidem enim autem, cum consectetur aut animi consequatur ad natus minima suscipit illo in, quo exercitationem dolores!</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="col-4">
        <div className="card-deck">
          <div className="card">
            <a href="chitiet.html"><img className="card-img-top" src="http://placehold.it/800x400" alt="App new"/></a>
            <div className="card-body">
              <h4 className="card-title"><a href="chitiet.html">Tin tuc so 3</a></h4>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aperiam incidunt dolorum blanditiis quidem enim autem, cum consectetur aut animi consequatur ad natus minima suscipit illo in, quo exercitationem dolores!</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="col-4">
        <div className="card-deck">
          <div className="card">
            <a href="chitiet.html"><img className="card-img-top" src="http://placehold.it/800x400" alt="App new"/></a>
            <div className="card-body">
              <h4 className="card-title"><a href="chitiet.html">Tin tuc so 4</a></h4>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aperiam incidunt dolorum blanditiis quidem enim autem, cum consectetur aut animi consequatur ad natus minima suscipit illo in, quo exercitationem dolores!</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="col-4">
        <div className="card-deck">
          <div className="card">
            <a href="chitiet.html"><img className="card-img-top" src="http://placehold.it/800x400" alt="App new"/></a>
            <div className="card-body">
              <h4 className="card-title"><a href="chitiet.html">Tin tuc so 5</a></h4>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aperiam incidunt dolorum blanditiis quidem enim autem, cum consectetur aut animi consequatur ad natus minima suscipit illo in, quo exercitationem dolores!</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="col-4">
        <div className="card-deck">
          <div className="card">
            <a href="chitiet.html"><img className="card-img-top" src="http://placehold.it/800x400" alt="App new"/></a>
            <div className="card-body">
              <h4 className="card-title"><a href="chitiet.html">Tin tuc so 6</a></h4>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aperiam incidunt dolorum blanditiis quidem enim autem, cum consectetur aut animi consequatur ad natus minima suscipit illo in, quo exercitationem dolores!</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
  {/* end tintuc */}
</div>


            </div>
        );
    }
}

export default News;