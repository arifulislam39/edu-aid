import { useEffect, useState } from "react";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import { Autoplay, Pagination } from 'swiper/modules';
import axios from "axios";

const Reviews = () => {
    const [reviews, SetReviews] =useState([]);


    useEffect(() => {
        axios
          .get("http://localhost:5000/reviews")
          .then((response) => {
            // Handle the response data
            console.log(response.data);
            SetReviews(response.data);
          })
          .catch((error) => {
            // Handle any errors
            console.error(error);
          });
      }, []);
    return (
        <div className="py-20">
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        

        {
            reviews.map((review=><SwiperSlide key={review.id}><div className="text-center bg-slate-300">
                <div className="w-full h-48 "><h2>
                {review.college_name}
                </h2>
                <p>{review.review}</p></div>
                </div></SwiperSlide>

            ))
        }
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
        </div>
    );
};

export default Reviews;