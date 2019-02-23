import React, { Component } from 'react';
import './../node_modules/bootstrap-css-only/css/bootstrap.min.css'
import './App.css';
import Timer from './Components/TimerForm'
class App extends Component {
  render() {
    return (
      <div className="App">
<Timer />
      </div>
    );
  }
}

export default App;
