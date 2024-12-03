import React from 'react'; 
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Sobre from './components/Sobre/Sobre';
import Games from './components/Games/Games';
import Footer from './components/Footer/Footer';

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
