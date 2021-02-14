import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Explore from './pages/Explore.js'
import Login from './components/Login';
import useToken from './components/useToken';
import Navbar from './components/Navbar';
// import ArcMap from './components/ArcMap/arcMap';

function App() {
  const {token, setToken} = useToken();
  // const authToken = getAuthToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          {/* <Route path="/map">
            <ArcMap />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
