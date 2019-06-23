import React, { Component } from 'react';
import NewsItem from './NewsItem';
import dl from './dulieu.json';
class News extends Component {
    render() {
     
        return (
            <div>
                <div>

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
      {

            dl.map((value,key) => {
              return(
                <NewsItem key={key}
                tinId={value.id}
                anh={value.anh}
                tieuDe={value.tieuDe}
                trichDan={value.trichDan} ></NewsItem>
              )
            })

      }   
    </div>
  </div>
  {/* end tintuc */}
</div>


            </div>
        );
    }
}

export default News;