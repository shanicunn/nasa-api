import React from 'react';
import './App.css';
import APOD from './components/APOD';
import OldAPODS from './components/OldAPODS';
import Sources from './components/Sources';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    console.log("Mounted")
  }
  render() {
    return (
      <Router>
      <div className="child nav">
        <nav>
          <ul>
            <li>
              <Link to="/home">HOME</Link>
            </li>
            <li>
              <Link to="/oldApod">PAST APODS</Link>
            </li>
            <li>
              <Link to="/sources">SOURCES</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
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
