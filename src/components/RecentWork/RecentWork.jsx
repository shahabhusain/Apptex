import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "./recent.css";
import logo from '../../assets/plogo.png'
import right from '../../assets/pro1.png'
const RecentWork = () => {
  return (
    <>
       <div className="boxx">
         <h2 className=" recent">Recent work</h2>
         <h1 className="title">   {" "}
        Your Partner <span className="span">in</span>{" "}
        <span className=" span1">Digital Evolution</span>
      </h1>
       <Swiper spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
        <div className="Containerr">
     

     <div className="right">
       <img src={logo} alt="" />
       <h2>Website / lms / Mobile App</h2>
       <h1>E-Tutor - Education Learning Management System</h1>
       <p>E-Tutor is an education, courses, and online (LMS) learning management system Figma template designed for people who want to start teaching online, create an LMS etc. </p>
       <button>View case study</button>
     </div>

       <img src={right} alt="" />
   </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="Containerr">
     

     <div className="right">
       <img src={logo} alt="" />
       <h2>Website / lms / Mobile App</h2>
       <h1>E-Tutor - Education Learning Management System</h1>
       <p>E-Tutor is an education, courses, and online (LMS) learning management system Figma template designed for people who want to start teaching online, create an LMS etc. </p>
       <button>View case study</button>
     </div>

       <img src={right} alt="" />
   </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="Containerr">
     

     <div className="right">
       <img src={logo} alt="" />
       <h2>Website / lms / Mobile App</h2>
       <h1>E-Tutor - Education Learning Management System</h1>
       <p>E-Tutor is an education, courses, and online (LMS) learning management system Figma template designed for people who want to start teaching online, create an LMS etc. </p>
       <button>View case study</button>
     </div>

       <img src={right} alt="" />
   </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="Containerrr">
            <h3><button>View More Project</button></h3>
 
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
};

export default RecentWork;
