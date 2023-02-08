import React , {useState} from "react";
import Navbar from './components/Navigation';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
