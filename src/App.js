import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const a1="ly";
class App1 extends Component {
  render() {
    return (
      <div>
        <h3>Ten toi la: {a1}</h3>
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" defaultChecked />
            Display value
          </label>
        </div>
      </div>
    );
  }
}
//Vi du ve ham Map
const so=[1,2,3,4,5,6,7,8];
const so2= so.map((x) => x*2+",");
const so3= so.map((x) => (
  <li>so: {x} </li>
));
class App2 extends Component {
  render() {
    return (
      <div>
        {so3}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <App2/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
