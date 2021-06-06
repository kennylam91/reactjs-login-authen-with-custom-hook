import React, { useState } from 'react'
import PropTypes from "prop-types";

export default function Login({setToken}) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let token = await login({username, password});
      setToken(token);
      localStorage.setItem('token', token);
    } catch(err) {
      alert(err);
    }
  }

  return (
    <div>
      <h1>Please Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(event) => setUsername(event.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={event => setPassword(event.target.value)} />
        </label>
        <div>
          <button type="submit" >Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

const login = ({username, password}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(username === 'admin' && password === 'admin'){
        resolve("123456") 
      }else {
        reject("Login fail");
      }
    }, 1000);
  })
}