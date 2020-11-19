import React from 'react';

import { BrowserRouter } from "react-router-dom";

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Navi from './components/Navi';


function App(){

  return (
    <div className="SPA-App">
      <header className="topsection">
        <Header />
      </header>
      <div className="midsection">
        <BrowserRouter>
          <section className="article">
            <Main />
          </section>
          <nav className="navigation">
            <Navi />
          </nav>
        </BrowserRouter>
      </div>
      <footer className="bottomsection">
        <Footer />
      </footer>
    </div>
  )
  
}

export default App;
