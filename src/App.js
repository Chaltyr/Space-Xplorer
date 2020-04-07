import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Details from './pages/Details';
import HomePage from './pages/Homepage';
import Navbar from './components/navbar';
// import { Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar />
      </div>
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
