import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import slide1 from "../../assets/images/slider/slide1.jpg";
import slide4 from "../../assets/images/slider/slide4.jpg";
import slide3 from "../../assets/images/slider/slide3.jpg";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SliderCard from "./SliderCard";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 100000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SliderCard
            image={slide1}
            text={
              "Streamline Your Assignments: Organize, Submit, and Track with Ease!"
            }
          ></SliderCard>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            image={slide4}
            text={
              "Simplify Assignment Management: From Planning to Submission in One Place"
            }
          ></SliderCard>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            image={slide3}
            text={
              "Stay on Top of Deadlines: Never Miss an Important Due Date Again!"
            }
          ></SliderCard>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
