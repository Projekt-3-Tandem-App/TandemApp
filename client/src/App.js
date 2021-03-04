import React, {Fragment} from 'react';
import './App.css';

import Navbar from './components/layout/Navbar';


const  App = ()  => {
  return (
    <Fragment>
      <Navbar/>
      <h1>Hellow W</h1>
      
      
    </Fragment>
  );
}

export default App;


/* <Route exact path="/" component={Home}/>
        <Route exact path="/chat" component={Beers}/>
        <Route exact path="/RandomBeer" component={RandomBeer}/>
        <Route exact path="/NewBeer" component={NewBeer}/>
        <Route exact path='/Beers/:id' component={ShowDetails}/> */
