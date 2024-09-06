import React from 'react'
import '../components/home.css'
const Home = () => {
  return (
    <div className=' back back1'>
           <div className='container'>
        <h1 className='title'><span className='span1'>Transformation</span> Vision into <br /> <span className='span2'>Digital Reality</span></h1>
        <p className='para'>Bring your visions to life with custom mobile and web apps, ensuring better user experience, engagement, and smart technology in a single transformative solution.</p>
        <div className='subcontainer'>
            <div>
                <h1 className='num'>150+</h1>
                <p className='pro'>Projects Delivered</p>
            </div>

            <div>
                <h1 className='num'>5+</h1>
                <p className='pro'>Years of Experience</p>
            </div>

            <div>
                <h1 className='num'>100+</h1>
                <p className='pro'>Five Star Rating</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home