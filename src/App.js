import React from 'react';
import Login from './components/Login';
import {
  BrowserRouter, Switch, Route, Link
} from "react-router-dom";
import Dashboard from './screens/Dashboard';
import Figures from './components/Figures';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Figures</h1>
        <div className="navBar">
          <Link to="/">Login</Link>
          <Link to="/myprofile">Profile</Link>
          <Link to="/figures">Figures</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/myprofile" component={Dashboard}></Route>
          <Route exact path="/figures" component={Figures}></Route>
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
