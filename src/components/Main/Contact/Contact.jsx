import React from 'react'
import './contact.css'
import s1 from '../../../assets/Youtube.png'
import s2 from '../../../assets/Instagram.png'
import s3 from '../../../assets/Twitter.png'
const Contact = () => {
  return (
   <div className='bac1'>
      <div className='bacc1'></div>
      <div className='bacc2'></div>
     <div className='contact'>
          <div className='content'>
          <h1>Get in Touch with Crafting Your Service Solutions</h1>
        <p>Reach out to us and let's start a conversation. We're here to answer your questions, provide guidance, and offer our exceptional service solutions. Your needs, our priority</p>
        <div className='social'>
            <img src={s1} alt="" />
            <img src={s2} alt="" />
            <img src={s3} alt="" />
        </div>
          </div>

          <form className="form">
             <input type="name" placeholder='name' />
             <input type="name" placeholder='email' />
             <textarea rows={7} placeholder='message' />
             <button className='btn'>Send Message</button>
          </form>
    </div>

   </div>
  )
}

export default Contact