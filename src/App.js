import React , {useState} from "react";
import Navbar from './components/Navigation';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Hero />
      
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
