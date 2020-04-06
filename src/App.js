import React from 'react';
import './App.css';
import UserOutput from './UserOuptput/UserOutput';
import { Component } from 'react';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    users:[
      { username: "Ash" },
      { username: "Mich" },
      { username: "Tuck" }
    ]
  }

  switchUserNameHandler = (event) => {
    this.setState({users: [
      { username: "Ashley" },
      { username: "Michelle" },
      { username: event.target.value }
    ]})
  }
  render() {
    const style = {
      font: 'inherit',
      border: '1px solid pink',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <UserOutput username={this.state.users[0].username} />
        <UserOutput username={this.state.users[1].username} />
        <UserOutput username={this.state.users[2].username} />
        <UserInput style={style} changed={this.switchUserNameHandler} updatedUsername={this.state.users[2].username} />
      </div>
    );
  }
}

export default App;
