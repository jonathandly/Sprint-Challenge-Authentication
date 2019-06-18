import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Jokes from './components/Jokes';

class App extends React.Component {
  logout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/login');
  }

  render() {
    return (
      <>
        <h1>Welcome</h1>

        <ul>
          <li><NavLink to="login">Login</NavLink></li>
          <li><NavLink to="register">Register</NavLink></li>
          <li><NavLink to="jokes">Jokes</NavLink></li>
          <li><button onClick={this.logout}>Logout</button></li>
        </ul>

        <main>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/jokes" component={Jokes} />
        </main>
      </>
    );
  }
}

export default withRouter(App);