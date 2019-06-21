import React, { Component } from 'react';

class Content extends Component {

    constructor(props) {
        super(props);
        this.state ={
          trangthai:0
        }
    }
    thongbao = () => {alert('Cach xu ly tuong trong react js');}
    thongbao2 = () => {
      alert('Thong bao so 2')
    }
    thongbao3 = (x) => {alert(x);}
    thongbao4 = (y) => {alert(y);}

    renderButton=() =>(
    <div className="row">
      <div>
        <div className="btn btn-info" onClick={this.thongbao}>Edit</div>
        <div className="btn btn-warning" onClick={this.thongbao2}>Remove</div>
      </div>
    </div>
      )
    renderForm=() =>(
      <div classname="row">
      <div className="form-group">
        <input type="text" name="ten" className="form-control" />
        <div className="btn btn-block btn-denger">Save</div>
      </div>
    </div>
    )
    displayCheck = () =>{
      if(this.state.trangthai===0){
        return this.renderButton();
      }
      else{
        return this.renderForm();
      }
    }
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
                    { this.displayCheck()}
  

     
</div>  
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Content;