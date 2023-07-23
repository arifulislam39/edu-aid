import { useEffect, useState } from "react";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Reviews = () => {
    const [reviews, SetReviews] =useState([]);

    useEffect(()=>{
        fetch("review.json")
        .then(res=>res.json())
        .then(data=>SetReviews(data))
    })
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
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