import React from 'react'
import "./footer.css"
import logo from '../../assets/Vector.png'
import img1 from '../../assets/ins.png'
const Footer = () => {
  return (
     <div className="co">
          <div className='footer'>
        <div className="logo">
        <img src={logo} alt="" />
        </div>
        <div className="sites">
            <h1>Sites Map</h1>
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Testimonial</li>
            <li>Contact Us</li>
        </div>
        <div className="Head">
            <h1>Head Office</h1>
            <p>Office # 09,2nd Floor Ali Tower,Main University Road Peshawar</p>
        </div>

        <div className="social">
            <h1>Social Link</h1>
            <div className='links'>
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            </div>
        </div>
    </div>
     </div>
  )
}

export default Footer