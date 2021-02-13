import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import API from '../../API';

async function loginUser(credentials) {
    return fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     // console.log({username,password});
    //     const token = await API.loginUser({username,password});
    //     setToken(token);
    //     console.log(token);
    // }

    const handleSubmit = async e => {
        e.preventDefault();
        console.log({username,password});
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
        console.log(token);
      }

    return(
        <div className="login-wrapper">
          <h1>Please Log In</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Username</p>
              <input type="text" onChange={e => setUserName(e.target.value)} />
            </label>
            <label>
              <p>Password</p>
              <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }