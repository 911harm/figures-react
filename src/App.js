import React from 'react';
import Login from './components/Login';
import {
  BrowserRouter, Switch, Route
} from "react-router-dom";
import Dashboard from './screens/Dashboard';
import NoFound from './screens/NoFound';
import Figures from './screens/Figures';
import CreateFigure from './screens/CreateFigure';


function App({ auths }) {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 style={{ color: "white", fontSize: "20px" }}>Figures | 911harm</h1>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/figures-react/" component={Login}></Route>
          <Route exact path="/myprofile" component={Dashboard}></Route>
          <Route exact path="/figures" component={Figures}></Route>
          <Route exact path="/figure-list" component={CreateFigure}></Route>
          <Route path="*" component={NoFound}></Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
