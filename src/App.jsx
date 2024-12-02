import React from 'react'; 
import Header from './components/Header';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Games from './components/Games';
import Footer from './components/Footer';

import './App.css'

function App() {
    return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Sobre />
        <Games />       
      </main>
      <Footer />
    </div>
  )
}

export default App
