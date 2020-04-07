import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Details from './pages/Details';
import HomePage from './pages/Homepage'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
     </Switch>
    </div>
  );
}

export default App;
