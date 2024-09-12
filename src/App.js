import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/Pages/Main';
import { router } from './components/router/router';
import ParticlesComponent from './components/particles';

function App() {
  return (
    <div className="App">
         <ParticlesComponent id="particles" />
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
