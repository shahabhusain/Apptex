import React from 'react'
import './services.css'
import img1 from '../../../assets/01.png'
const Services = () => {
  const ServiceData = [
    {
       logo:img1,
       title:"Mobile Application",
       para:"Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
       btn:"Explore"
    },

    {
      logo:img1,
      title:"Mobile Application",
      para:"Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
      btn:"Explore"
   },

   {
    logo:img1,
    title:"Mobile Application",
    para:"Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
    btn:"Explore"
 },


 {
  logo:img1,
  title:"Mobile Application",
  para:"Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
  btn:"Explore"
},

{
  logo:img1,
  title:"Mobile Application",
  para:"Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
  btn:"Explore"
},
  ]
  return (
    <div className='contain'>
        <div className="right">
        <div className='div'>
        <h1 className='title'>Services</h1>
        <p className="para">Bring your visions to life with custom mobile and web apps, ensuring better user experience, engagement, and smart technology in a</p>
        <button className='btn'>Get A Free Quote</button>
      </div>
        </div>

        <div className="contain1">

          {
            ServiceData.map((item)=>(
              <div className="div1">
              <img src={item.logo} alt="" className="logo" />
                 <div className='contaents'>
                 <h1 className="title1">{item.title}</h1>
              <p className=' para1'>{item.para}</p>
              <button className='btn1'>{item.btn}</button>
                 </div>
            </div>
            ))
          }

        </div>
    </div>
  )
}

export default Services