import React from 'react';
import Login from './components/Login';
import {
  BrowserRouter, Switch, Route
} from "react-router-dom";
import Dashboard from './screens/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Figures</h1>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/myprofile" component={Dashboard}></Route>
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
