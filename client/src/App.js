import React, { Component } from 'react';
import './../node_modules/bootstrap-css-only/css/bootstrap.min.css'
import './App.css';
import TimersDashboard from './Components/TimersDashboard'
class App extends Component {
  render() {
    return (
      <div className="App">
<TimersDashboard />
      </div>
    );
  }
}

export default App;
