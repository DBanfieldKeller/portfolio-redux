import React , {useState} from "react";
import Navigation from './components/Navigation';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProjectCard from './components/Card'
import Projects from "./components/Projects";
import CurrentPage from "./components/CurrentPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentPageState, setPage] = useState(
    'AboutMe'
  )
  return (
    <div className="App">
      <Header />
      <Navigation/>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
