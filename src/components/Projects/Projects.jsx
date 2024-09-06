import React from 'react';
import './projects.css';
import image1 from '../../assets/img1.png';
import image2 from '../../assets/img2.png';
import image3 from '../../assets/img3.png';
import image4 from '../../assets/img4.png';
import image5 from '../../assets/img5.png';
import image6 from '../../assets/img6.png';
import image7 from '../../assets/img7.png';
import image8 from '../../assets/img8.png';
import image9 from '../../assets/img9.png';

const Projects = () => {
  return (
    <div className='logos'>
        <div className=' logo-slide'>
      <img src={image1} alt="Project 1" />
      <img src={image2} alt="Project 2" />
      <img src={image3} alt="Project 3" />
      <img src={image4} alt="Project 4" />
      <img src={image5} alt="Project 5" />
      <img src={image6} alt="Project 6" />
      <img src={image7} alt="Project 7" />
      <img src={image8} alt="Project 8" />
      <img src={image9} alt="Project 9" />
      </div>
    </div>
  );
}

export default Projects;
