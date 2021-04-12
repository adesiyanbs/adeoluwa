import React from 'react'
import './App.css'
import Contact from './components/Contact'
import Home from './components/Home'
import Subnote from './components/Subnote'
function App() {
  return (
    <div className="App">
      <Home/>
      <Subnote/>
      <Contact/>
    </div>
  );
}

export default App;
