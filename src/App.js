import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home';

import ParticlesComponent from './components/particles';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles" />
      <div className='back'>
      <Header />
      <Home />
      </div>
      <Projects />
      <Services />
      <About />
    </div>
  );
}

export default App;
