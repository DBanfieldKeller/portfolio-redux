import React , {useState} from "react";
import Navbar from './components/Navigation';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import CurrentPage from "./components/CurrentPage";
import Projects from "./components/Projects";

function App() {
  const [currentPageState, setPage] = useState(
    'AboutMe'
  )
  return (
    <div className="App">
      <Header />
      <Navbar setPage={setPage} currentPageState={currentPageState}/>
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
