import React from 'react';
import './App.css';
import APOD from './components/APOD';
import OldAPODS from './components/OldAPODS';
import Header from './components/Header';
import Sources from './components/Sources';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";

class App extends React.Component {

  componentDidMount() {
    // console.log("App.js mounted")
  }
  render() {
    return (
      
      
<Router>
    
    
      <div className="App">
        <Header />
        <nav className="child nav">
          <ul >
            <li>
              <NavLink activeClassName="selected" to="/home">HOME</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/oldApod">PAST APODS</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/sources">SOURCES</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <APOD />
          </Route>
          <Route path="/oldApod">
            <OldAPODS />
          </Route>
          <Route path="/sources">
            <Sources />
          </Route>
        </Switch>
      </div>
      
    </Router> 
  );
  }
  
}

export default App;
