import React from 'react'; 
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Sobre from './components/Sobre/Sobre';
import Games from './components/Games/Games';
import UniCandy from './components/Games/UniCandy/UniCandy';
import MemoryCute from './components/Games/MemoryCute/MemoryCute';
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
        <UniCandy />
        <MemoryCute />     
      </main>
      <Footer />
    </div>
  )
}

export default App
