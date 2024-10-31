import React from 'react'
import img1 from '../../../assets/bg.png'
import Logo from '../../../assets/asklogo.png'
import main from '../../../assets/ask1.png'
import './hero.css'
const Hero = () => {
  return (
    <div className='backkk '>
      <img src={img1} alt="" />
    <div className='title'>
      <div className='context'>
        <img src={Logo} alt="" />
        <h1><span className=' span1'>ASK</span><span className=' span2'>MED</span> MOBILE APP</h1>
      </div>
      <div className="img">
        <img className=' main' src={main} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Hero
