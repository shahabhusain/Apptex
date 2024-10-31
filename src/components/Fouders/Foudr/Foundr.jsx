import React from 'react'
import './foundr.css'
import img1 from '../../../assets/ameer.png'
import img2 from '../../../assets/hashim.png'
import social from '../../../assets/Social Buttons.png'
const Foundr = () => {
  return (
  <div className='foundrr'>
      <div className='founrr'>
        <div className="rig">
            <img className='Ameer' src={img1} alt="" />
            <div className="conu">
                <div className='contt'>
                    <h2>Ameer Kakar</h2>
                    <h3>Chief Technology Officer</h3>
                     <p>Ameer234@gmail.com</p>
                </div>
                <img src={social} alt="" />
            </div>
        </div>

        <div className="rig">
            <img className='hashim' src={img2} alt="" />
            <div className="conu">
                <div className='contt'>
                    <h2>Hashim</h2>
                    <h3>Chief Technology Officer</h3>
                     <p>Ameer234@gmail.com</p>
                </div>
                <img src={social} alt="" />
            </div>
        </div>
    </div>
  </div>
  )
}

export default Foundr