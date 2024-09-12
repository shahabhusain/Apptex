import React, { useState } from 'react'
import './header.css'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  const [open, setOpen] = useState(0)
  return (
   <div className="header">
     <div className='container1'>
        <div className="div1">
            <img src={logo} alt="" />
        </div>
        <div className="div2">
            <Link to="/" onClick={()=> setOpen(0)} className={`${open === 0 ? "active" : "li"}`}>Home</Link>
            <Link to="/recent" onClick={()=> setOpen(1)} className={`${open === 1 ? "active" : "li"}`}>Recent Work</Link>
            <Link to="/founder" onClick={()=> setOpen(2)} className={`${open === 2 ? "active" : "li"}`}>Founders</Link>
        </div>
        <div className="div3">
            <button>Get A Free Quote</button>
        </div>
    </div>
   </div>
  )
}

export default Header