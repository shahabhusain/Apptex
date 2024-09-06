import React from 'react'
import './header.css'
import logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className='container1'>
        <div className="div1">
            <img src={logo} alt="" />
        </div>
        <div className="div2">
            <li>Home</li>
            <li>Recent Work</li>
            <li>Founders</li>
        </div>
        <div className="div3">
            <button>Contact</button>
        </div>
    </div>
  )
}

export default Header