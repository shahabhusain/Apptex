import './App.css';
import About from './components/About/About';
import Clients from './components/Client/Clients';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home';
import Indutry from './components/Idustry/Indutry';

import ParticlesComponent from './components/particles';
import Projects from './components/Projects/Projects';
import RecentWork from './components/RecentWork/RecentWork';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles" />
      <div className='back'>
      <Header />
      <Home />
      </div>
        <div className='bac'>
        <Projects />
        <About />
        
      <Services />
      <RecentWork />
      <Indutry />
      <Clients />
      <Contact />
      <Footer />
      </div>
     
    </div>
  );
}

export default App;
