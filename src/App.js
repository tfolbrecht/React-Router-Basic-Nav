import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Router path="/" component={Home} />
    <Router path="/about" component={About} />
    <Router path="/contact" component={Contact} />
  </div>
);

export default App;
