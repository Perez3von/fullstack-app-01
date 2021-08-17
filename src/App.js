
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header.js';
import CreatePerson from './CreatePerson.js';
import PersonDetails from './PersonDetail.js';
import People from './People.js';
import Home from './Home.js';



class App extends Component {
  state = {  }
  render() { 
    return ( 
    <>
    
    <BrowserRouter >
    <Header/> 
    <Switch>

      <Route exact path='/' component={Home}/>
      <Route exact path='/people' component={People}/>
      <Route exact path='/people:id' component={PersonDetails}/>
      <Route exact path='/create' component={CreatePerson}/>
    


    </Switch>
    
    
    
    </BrowserRouter>

    </> 
    
    
    );
  }
}
 
export default App;
