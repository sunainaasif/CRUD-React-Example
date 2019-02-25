import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Create from '../src/Components/create';
import View from '../src/Components/view';
import Edit from '../src/Components/edit';
// import { create } from 'domain';

class App extends Component {
  render() {
    return (
     <Router>
       <div className="container">
          <Link to={'/'} className="navbar-brand"> React CRUD </Link>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul>
              <li className='nav-item'>
                <Link to={'/'} className='nav-link'> Home </Link>
               </li>
              <li className='nav-item'>
                <Link to={'/create'} className='nav-link'>  Create </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/view'} className='nav-link'> VIEW </Link>
              </li>
            </ul>
           </div>
        </nav> <br/>
       <h2> CRUD REACT Operations </h2>
        <Switch>
          <Route exact path='/' component= { Create } /> 
          <Route path='/create' component= { Edit } /> 
          <Route path='/view' component ={ View } /> 
        </Switch>
       </div>
     </Router>
    );
  }
}
export default App;

