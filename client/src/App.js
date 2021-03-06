import React from 'react';
import './App.css';
import './auth.css';
import { Route, Redirect } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Signup from './components/Signup';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './components/HomePage';
import Profile from './components/Profile';
import AboutMe from './components/AboutMe';
import Languages from './components/Languages';


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
          render={props => {
            if (this.state.user) {
              return <HomePage user={this.state.user} {...props} />
            } else return <Redirect to='/' />
          }}
        />

        <Route
          exact path='/profile'
          render={props => {
            if (this.state.user) {
              return <Profile user={this.state.user} {...props} />
            } else return <Redirect to='/' />
          }}
        />

        <Route
          exact path='/aboutme'
          render={props => {
            if (this.state.user) {
              return <AboutMe user={this.state.user} {...props} />
            } else return <Redirect to='/' />
          }}
        />

        <Route
          exact path='/languages'
          render={props => {
            if (this.state.user) {
              return <Languages user={this.state.user} {...props} />
            } else return <Redirect to='/' />
          }}
        />

        {/* <Route exact path ="/" component={HomePage} /> */}
        {/* <Route exact path ="/profile" component={Profile} /> */}


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