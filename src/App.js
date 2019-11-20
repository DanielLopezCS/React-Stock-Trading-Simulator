import React from 'react';
import './App.css';


import Dashboard from './containers/Dashboard';
import Market from './containers/Market';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (
    <Router>
       <Switch>
          <Route path="/dashboard">
          <Dashboard/>
          </Route>
          <Route exact path="/" component={Market}/>
         
          <Route path="/signin" component={SignIn}/>
            
          <Route path="/signup" component={SignUp}/>

        </Switch>

    </Router>
  );
}

export default App;
