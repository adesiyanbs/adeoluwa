import React from 'react'
import './App.css'
import Contact from './components/Contact'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Subnote from './components/Subnote'
function App() {
  return (
    <div className="App">
      <Home/>
      <Subnote/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
