import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Homepage from './Components/Homepage/Homepage';
import Cart from './Components/Cart/cart';

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar />
          <Route exact path="/" component={Homepage} />
          <Route path="/home" component={Homepage} />
          <Route path="/cart" component={Cart} />
        </Router>
    </div>
  );
}

export default App;
