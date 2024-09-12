import React from 'react'
import Home from '../Main/Home/Home'
import Projects from '../Main/Projects/Projects'
import About from '../Main/About/About'
import Services from '../Main/Services/Services'
import RecentWork from '../Main/RecentWork/RecentWork'
import Indutry from '../Main/Idustry/Indutry'
import Clients from '../Main/Client/Clients'
import Contact from '../Main/Contact/Contact'

const Main = () => {
  return (
    <div className="App">
 
    <div className='back'>
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
    </div>
   
  </div>
  )
}

export default Main