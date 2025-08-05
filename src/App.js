import About from './Pages/About';
import Skills from './Pages/Skills';

import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Certificates from './Pages/Certificates';
import Footer from './Pages/Footer';
import Header from './Pages/Header';
import Home from './Pages/Home';
import './App.css';
 

function App() {
  return (
   
    <main className="main-content">
      <Header/>
      <Home />
  <About />
  <Skills />
  <Projects />
  <Certificates />
  <Contact />
  <Footer />
</main>

   
  );
}

export default App;
