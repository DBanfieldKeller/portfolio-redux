import React , {useState} from "react";
import Navbar from './components/Navigation';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from "./components/AboutMe";


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Hero />
      <AboutMe />
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
