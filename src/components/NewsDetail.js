import React, { Component } from 'react';
import dl from './dulieu.json';
class NewsDetail extends Component {
    render() {
      console.log(this.props.match.params.id);
      console.log(typeof(this.props.match.params.id));
      
        return (
            <div>
                <div>

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
  {
  dl.map((value,key) => {
        if(value.id ==  this.props.match.params.id){
          return(
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <img src={value.anh} className="img-fluid rong100 " alt="App NewsDetail " />
              <h3 className="lead text-center">{value.tieuDe}</h3>
              <hr className="my-2" />
              {
                value.noiDung
              }
              <p>More info</p>
            </div>
          </div>
          )
        }
      })
    }
  <div className="container">                        
    <h4 className="card-title text-center">Tin lien quan</h4>
    <div className="row">
      <div className="col-12">
        <div className="card-deck">
          <div className="card">
            <a href="/tin-chi-tiet"><img className="card-img-top" src="http://placehold.it/500x300" alt="" /></a>
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nobis rerum sint laborum natus maxime laboriosam reprehenderit quis reiciendis ipsa nam recusandae, assumenda quibusdam officiis ea quam facilis, molestiae fugiat.</p>
            </div>
          </div>
          <div className="card">
            <a href="/tin-chi-tiet"><img className="card-img-top" src="http://placehold.it/500x300" alt=" App NewsDetail" /></a>
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nobis rerum sint laborum natus maxime laboriosam reprehenderit quis reiciendis ipsa nam recusandae, assumenda quibusdam officiis ea quam facilis, molestiae fugiat.</p>
            </div>
          </div>
          <div className="card">
            <a href="/tin-chi-tiet"><img className="card-img-top" src="http://placehold.it/500x300" alt="App NewsDetail" /></a>
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nobis rerum sint laborum natus maxime laboriosam reprehenderit quis reiciendis ipsa nam recusandae, assumenda quibusdam officiis ea quam facilis, molestiae fugiat.</p>
            </div>
          </div>
          <div className="card">
            <a href="/tin-chi-tiet"><img className="card-img-top" src="http://placehold.it/500x300" alt="App NewsDetail" /></a>
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