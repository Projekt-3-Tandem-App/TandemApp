import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Signup from './components/Signup';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './components/HomePage';
class App extends React.Component {
  state = {
    user: this.props.user
  }
  setUser = user => {
    this.setState({
      user: user
    })
  }
  render() {
    return (
      <div className="App">
        <LandingPage user={this.state.user} setUser={this.setUser} />
        <Route
          exact path='/'
          // component={Projects}
          render={props => {
            if (this.state.user) {
              return <HomePage {...props} />
            } else return <Redirect to='/' />
          }}
        />
        {/* <ProtectedRoute
          exact path='/projects'
          user={this.state.user}
          component={Projects}
          redirectPath='/login'
        /> */}
        {/* <Route
          exact path='/projects/:id'
          component={ProjectDetails}
        /> */}
        <Route
          exact path='/signup'
          // component={Signup}
          // if you want to pass props in the routing we use a so called render prop
          render={props => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact path='/login'
          render={props => <Login setUser={this.setUser} {...props} />}
        />
      </div>
    );
  }
}
export default App;