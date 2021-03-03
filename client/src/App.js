import React, {Fragment} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';


const  App = ()  => {
  return (
    <Fragment>
      <Navbar/>
      <Switch>
     
      </Switch> 
    </Fragment>
  );
}

export default App;


/* <Route exact path="/" component={Home}/>
        <Route exact path="/chat" component={Beers}/>
        <Route exact path="/RandomBeer" component={RandomBeer}/>
        <Route exact path="/NewBeer" component={NewBeer}/>
        <Route exact path='/Beers/:id' component={ShowDetails}/> */
