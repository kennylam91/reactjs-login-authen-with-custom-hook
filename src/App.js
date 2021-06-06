//https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import { useState } from "react";
import Login from './components/Login/Login';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  if(!token){
    return <Login setToken={setToken}/>
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}



export default App;
