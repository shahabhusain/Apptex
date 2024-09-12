import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "./client.css";
import img1 from "../../../assets/circle.png";
const Clients = () => {
  return (
    <div className="Con1">
       <h1 className="title">
              <span className="span1">What</span> Our{" "}
              <span className="span2">Clients Say</span>
            </h1>
            <p className="desc">
              Real stories from real explorers – see how we’ve helped our
              clients create unforgettable journeys.
            </p>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>

            <div className="Con2">
              <img src={img1} alt="" />
              <p>
                “Amet risus eget at hendrerit erat nibh. Semper nec ornare
                pretium neque ut tortor tincidunt hendrerit accumsan. Pulvinar
                vel sit sed massa morbi. Ac dolor orci facilisis parturient. In
                ac et in congue.”
              </p>
              <div>
                <h1>Name Surname</h1>
                <h3>Position, Company name</h3>
              </div>
            </div>
      
        </SwiperSlide>
        <SwiperSlide>
            <div className="Con2">
              <img src={img1} alt="" />
              <p>
                “Amet risus eget at hendrerit erat nibh. Semper nec ornare
                pretium neque ut tortor tincidunt hendrerit accumsan. Pulvinar
                vel sit sed massa morbi. Ac dolor orci facilisis parturient. In
                ac et in congue.”
              </p>
              <div>
                <h1>Name Surname</h1>
                <h3>Position, Company name</h3>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="Con2">
              <img src={img1} alt="" />
              <p>
                “Amet risus eget at hendrerit erat nibh. Semper nec ornare
                pretium neque ut tortor tincidunt hendrerit accumsan. Pulvinar
                vel sit sed massa morbi. Ac dolor orci facilisis parturient. In
                ac et in congue.”
              </p>
              <div>
                <h1>Name Surname</h1>
                <h3>Position, Company name</h3>
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Clients;
