import React, { useState, useEffect } from 'react';
import './App.css';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// import AuthenticatedRoute from "./components/authenticator/authenticatedRoute";
// import UnauthenticatedRoute from "./components/authenticator/unauthenticatedRoute";
import { AppContext } from "./libs/contextLib";
import { useSelector, useDispatch } from 'react-redux';

// Actions
// import {increment, decrement } from './action';

// custom components
import Login from './components/Login/';
import Dashboard from './components/Dashboard';
import Setting from './components/Setting';
import Product from './components/Product/';

function App(props: any) {
  const history = createBrowserHistory();
  // const [isAuthenticated, userHasAuthenticated] = useState(false);
  // const counter = useSelector(state => state.counter);
  // const isLogged = useSelector(state => state.isLogged);

  return (
    <div className="App">
      
          <Router history={history}>
            <Switch>
            {/* <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}> */}
              <Route exact path="/login" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/setting" component={Setting} />
              <Route exact path="/product" component={Product} />
              <Redirect from="*" to="/login" />
              {/* </AppContext.Provider> */}
            </Switch>
          </Router>
      
    </div>
  );
}

export default App;
