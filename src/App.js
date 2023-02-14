import React , {useState} from "react";
import Navbar from './components/Navigation';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Hero />
      <p>Add Current Page Here</p>
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
