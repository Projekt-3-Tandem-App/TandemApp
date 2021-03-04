import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Navbar from './components/layout/Navbar';
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
        <Navbar/>
        <LandingPage user={this.state.user} setUser={this.setUser} />
        <Route
          exact path='/homepage'
          // component={Projects}
          render={props => {
            if (this.state.user) {
              return <HomePage {...props} />
            } else return <Redirect to='/login' />
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










        // <Route exact path="/chat" component={Beers}/>
        // <Route exact path="/RandomBeer" component={RandomBeer}/>
        // <Route exact path="/NewBeer" component={NewBeer}/>
        // <Route exact path='/Beers/:id' component={ShowDetails}/> */
