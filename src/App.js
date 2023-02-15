import React , {useState} from "react";
import Navbar from './components/Navigation';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import CurrentPage from "./components/CurrentPage";

function App() {
  const [currentPageState, setPage] = useState(
    'AboutMe'
  )
  return (
    <div className="App">
      <Header />
      <Navbar setPage={setPage} currentPageState={currentPageState}/>
      <Hero />
      <CurrentPage currentPageState={currentPageState} />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
