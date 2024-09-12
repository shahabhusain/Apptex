import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./recent.css";
import logo from "../../../assets/plogo.png";
import right from "../../../assets/pro1.png";

gsap.registerPlugin(ScrollTrigger);

const RecentWork = () => {
  // const RecentData = [
  //   {
  //     logo: logo,
  //     logoText: "Website / LMS / Mobile App",
  //     title:"E-Tutor - Education Learning Management System",
  //     sub:"   E-Tutor is an education, courses, and online (LMS) learning management system Figma template designed for people who want to start teaching online, create an LMS, etc.",
  //     btn:"View case study",
  //     right: right
  //   },

  //   {
  //     logo: logo,
  //     logoText: "Website / LMS / Mobile App",
  //     title:"E-Tutor - Education Learning Management System",
  //     sub:"   E-Tutor is an education, courses, and online (LMS) learning management system Figma template designed for people who want to start teaching online, create an LMS, etc.",
  //     btn:"View case study",
  //     right: right
  //   },

  //   {
  //     logo: logo,
  //     logoText: "Website / LMS / Mobile App",
  //     title:"E-Tutor - Education Learning Management System",
  //     sub:"   E-Tutor is an education, courses, and online (LMS) learning management system Figma template designed for people who want to start teaching online, create an LMS, etc.",
  //     btn:"View case study",
  //     right: right
  //   },
  // ]
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    const slides = swiperRef.current.querySelectorAll(".swiper-slide");
    const slideWidth = swiperRef.current.offsetWidth;

    // GSAP animation
    gsap.to(slides, {
      xPercent: -100 * (slides.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: swiperRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (slides.length - 1),
        end: () => `+=${slideWidth * slides.length}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="boxx">
        <h2 className="recent">Recent work</h2>
        <h1 className="title">
          {" "}
          Your Partner <span className="span">in</span>{" "}
          <span className="span1">Digital Evolution</span>
        </h1>
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
           <div className="slider1">
           <div className="">
           <div className="Containerr">
           <div className="right">
                <img src={logo} alt="" />
                <h2>Website / LMS / Mobile App</h2>
                <h1>E-Tutor - Education Learning Management System</h1>
                <p>
                  E-Tutor is an education, courses, and online (LMS) learning
                  management system Figma template designed for people who want
                  to start teaching online, create an LMS, etc.
                </p>
                <button>View case study</button>
              </div>
              <img className="righ" src={right} alt="" />
           </div>
            </div>
           </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Containerr">
              <div className="right">
                <img src={logo} alt="" />
                <h2>Website / LMS / Mobile App</h2>
                <h1>E-Tutor - Education Learning Management System</h1>
                <p>
                  E-Tutor is an education, courses, and online (LMS) learning
                  management system Figma template designed for people who want
                  to start teaching online, create an LMS, etc.
                </p>
                <button>View case study</button>
              </div>
              <img className="righ"  src={right} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Containerr">
              <div className="right">
                <img src={logo} alt="" />
                <h2>Website / LMS / Mobile App</h2>
                <h1>E-Tutor - Education Learning Management System</h1>
                <p>
                  E-Tutor is an education, courses, and online (LMS) learning
                  management system Figma template designed for people who want
                  to start teaching online, create an LMS, etc.
                </p>
                <button>View case study</button>
              </div>
              <img className="righ"  src={right} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="Containerrr">
              <h3>
                <button>View More Projects</button>
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default RecentWork;
