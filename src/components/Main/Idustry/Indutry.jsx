import React from 'react'
import './industry.css'
import img1 from '../../../assets/ind1.png'
import img2 from '../../../assets/ind2.png'
import img3 from '../../../assets/ind3.png'
import img4 from '../../../assets/ind4.png'
import img5 from '../../../assets/ind5.png'
import img6 from '../../../assets/ind6.png'
const Indutry = () => {
    const industryData = [
        {
            logo:img1,
            title:"Food Industries",
            desc:"Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
        },

        {
            logo:img2,
            title:"Food Industries",
            desc:"Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
        },

        {
            logo:img3,
            title:"Food Industries",
            desc:"Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
        },

        {
            logo:img4,
            title:"Food Industries",
            desc:"Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
        },

        {
            logo:img5,
            title:"Food Industries",
            desc:"Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
        },

        {
            logo:img6,
            title:"Food Industries",
            desc:"Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
        },

    ]
  return (
     <div className="con">
        <h1 className='title'><span className='span1'>Transforming</span> Industries with <span className='span2'>Smart IT Solutions</span></h1>
        <p className='desc'>Driving Innovation and Efficiency Across Diverse Sectors with Scalable Technology and Expert Services</p>
         <div className='conn'>
        {
            industryData.map((item)=>(
                <div className='boc'>
            <img src={item.logo} alt="" />
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
        </div>
            ))
        }
    </div>
     </div>
  )
}

export default Indutry