import React from 'react';
import './App.css';
import APOD from './components/APOD';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <APOD />
    </div>
  );
}

export default App;
