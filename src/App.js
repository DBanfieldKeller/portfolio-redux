import React, { useState } from "react";
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import CurrentPage from "./components/CurrentPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentPageState, setPage] = useState(
    'AboutMe'
  )
  return (
    <div className="App">
      <Header />
      <Navigation setPage={setPage} currentPageState={currentPageState} />
      <CurrentPage currentPageState={currentPageState} />
      <Footer />
    </div>
  );
}

export default App;
