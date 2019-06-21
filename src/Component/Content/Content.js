import React, { Component } from 'react';

class Content extends Component {

    constructor(props) {
        super(props);
    }
    thongbao = () => {alert('Cach xu ly tuong trong react js');}
    thongbao2 = () => {
      alert('Thong bao so 2')
    }
    thongbao3 = (x) => {alert(x);}
    thongbao4 = (y) => {alert(y);}

    render() {
        return (
            <section>
            <div className="container">
              <div className="row align-items-center">
                <div className={"col-lg-6 "+this.props.vitri1}>
                  <div className="p-5">
                    <img className="img-fluid rounded-circle" src={this.props.anh} alt />
                  </div>
                </div>
                <div className="col-lg-6 ">
                  <div className="p-5">
                    <h2 className="display-4">{this.props.tieude} </h2>
                    <p>
                        {this.props.trichdan}
                    </p>
                    <div className="row">
                        <div>
                          <div className="btn btn-info" onClick={this.thongbao}>Edit</div>
                          <div className="btn btn-warning" onClick={this.thongbao2}>Remove</div>
                          <div className="btn btn-warning" onClick={()=>this.thongbao3("hahahaha")}>TB3</div>
                          <div className="btn btn-warning" onClick={this.thongbao4.bind(this,"kkkk")}>TB4</div>
                        </div>
                      </div>
                  </div>  
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Content;