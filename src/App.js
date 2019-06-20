import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//Su dung cach 1(funtion)
function NumberOne(props){
  return(
    <div className="col-6">
      <div className="card">
          <img className="card-img-top" src={props.linkanh} alt=""></img>
          <div className="card-body">
            <h4 className="card-title">{props.tieude}</h4>
            <p className="card-text">Text</p>
          </div>
      </div>

    </div>
  )
} 

//Cach 2 su dung Class de dinh nghia va thao tac voi props
class NumberTwo extends Component {
  render() {
    return (
      <div className="col-4">
      <div className="card">
          <img className="card-img-top" src={this.props.linkanh} alt=""></img>
          <div className="card-body">
            <h4 className="card-title">{this.props.tieude}</h4>
            <p className="card-text">Lorem ipsum dolor...................</p>
          </div>
      </div>

    </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="container">
          <div className="row">
              <NumberOne tieude="San pham so 1" linkanh="https://png.pngtree.com/element_pic/17/03/02/740c21696ef195717fa3ab5140851638.jpg"/>
              <NumberOne tieude="Aquafina" linkanh="https://img.websosanh.vn/v2/users/root_product/images/nuoc-uong-dong-chai-aquafina/XSkUPf4CgrR5.jpg?compress=85&width=220"/>
              <NumberTwo tieude="THtrue milk" linkanh="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVUvV1KU-_gz6GEAwWy9UQKNE9arp12IlDLWAbXmhIMKcy3nIDsg"/>
          
          </div>
      </div>

    </div>
  );
}

export default App;
