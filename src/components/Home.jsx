import React from 'react'
import '../components/home.css'
import CountUp from "react-countup";
const Home = () => {
  return (
    <div className=''>
           <div className='container'>
        <h1 className='title'><span className='span1'>Transformation</span> Vision into <br /> <span className='span2'>Digital Reality</span></h1>
        <p className='para'>Bring your visions to life with custom mobile and web apps, ensuring better user experience, engagement, and smart technology in a single transformative solution.</p>
        <div className='subcontainer'>
            <div>
                <h1 className='num'><CountUp start={0} end={150} duration={2} delay={0} />+</h1>
                <p className='pro'>Projects Delivered</p>
            </div>

            <div>
                <h1 className='num'> <CountUp start={0} end={5} duration={2} delay={0} />+</h1>
                <p className='pro'>Years of Experience</p>
            </div>

            <div>
                <h1 className='num'><CountUp start={0} end={100} duration={2} delay={0} />+</h1>
                <p className='pro'>Five Star Rating</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home