import React, {Component} from 'react';
import './App.css';
import NoiDung from './noiDung'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai:"khoitao",
      trangthai2:"khoitao2"
    }
  }
  
  componentWillMount() {
    console.log('ComponentWillMount chay dau tien')
  }
  componentDidMount() {
    console.log('ComponentDidMount chay sau')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('ShouldComponentUpdat da chay');
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('ComponentWillUpdate da chay')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('ComponentDidUpdate da chay')
  }
  capNhatState = () => {
    this.setState({
      trangthai:"Cap nhat 1",
      trangthai2:"Cap nhat 2"
    });
  }
  
  
  
  
  
  render() {
    console.log('Day la ham render');
    console.log(this.state.trangthai);
    return (
      <div className ="App">
        <NoiDung ten={this.state.trangthai2}></NoiDung>
        <button onClick={() => this.capNhatState()}>Click de update State</button>
      </div>
    );
  }
}

export default App;
