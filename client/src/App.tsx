import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Build from './pages/Build'
import BuildResult from './components/BuildResult';
import Contact  from './pages/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Build} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route path='/build/:id' component={BuildResult} />
      </Switch>
    </Router>
  );
}                                  



export default App;

