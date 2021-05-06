import React from 'react'
import './App.css'
import Contact from './components/Contact'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Subnote from './components/Subnote'
import {BrowserRouter as Router,
Switch, Route, Link} from 'react-router-dom'
function App() {
  return (
    <main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact  path="/about" component={About}/>
        </Switch>
    </main>
  );
}

export default App;
