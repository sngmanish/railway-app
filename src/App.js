

import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import React from "react";

import './App.css';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
      <BrowserRouter>
      <Switch> 
             <Route path="/login" component={Login} />
             <Route exact path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
      </React.StrictMode>
      {/* <Login/> */}
      
    </div>
  );
}

export default App;
