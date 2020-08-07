import React from 'react';
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import logo from './logo-unit.svg';

const Header = () => (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarToggle'
          aria-controls='navbarToggle'
          aria-expanded='false'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <a className='navbar-brand' href='/'>
          <img src={logo} width="30" height="30" alt="logo" className="d-inline-block align-top"/>
          Health Survey
        </a>

        <div className='collapse navbar-collapse' id='navbarToggle'>
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">Home</Link>
            <Link className="nav-item nav-link" to="/results">Results</Link>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/">
        </Route>
      </Switch>
    </>
);

export default Header;