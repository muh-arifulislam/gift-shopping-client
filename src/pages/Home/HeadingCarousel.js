import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel.css";

// import required modules
import { Navigation } from "swiper";
import image from "../../assets/images/s2.jpg";
import image1 from "../../assets/images/s1.jpg";
const HeadingCarousel = () => {
  return (
    <section>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="prevent-select">
          <img src={image} alt="" />
        </SwiperSlide>
        <SwiperSlide className="prevent-select">
          <img src={image1} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeadingCarousel;
