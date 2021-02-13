import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import useToken from './components/useToken';

function App() {
  const {token, setToken} = useToken();
  // const authToken = getAuthToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Qualesco</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          {/* <Route path="/preferences">
            <Preferences />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
