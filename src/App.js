import React, {Component} from 'react';
import TopNavBar from './components/Navbar';
import LoginForm from './components/Form';

export default class App extends Component {
  render() {
    return (
      <div className ="container">
        <div className ="row">
          <TopNavBar/>
          <LoginForm/>
        </div>
      </div>
    )
  }
}