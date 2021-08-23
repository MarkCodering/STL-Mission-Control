import React, { Component } from 'react';
import Monitor from './components/monitor/monitor';
import ControlPanel from './components/control_panel/control_panel';
import Clock from './components/clock/clock';
import './App.css';

class App extends Component {
  /*
  MissionState = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };*/

  render() {
    return (
      <div className="App-background" >
        <ControlPanel />
        <Monitor width="300" height="300"/>
        <Clock />
      </div>
    );
  }
}

export default App;