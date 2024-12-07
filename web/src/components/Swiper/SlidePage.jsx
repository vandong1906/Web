import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function SlidePage({children}) {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
       
       {children.map((slide) => (
        <SwiperSlide >
          <img src={slide.imgUrl} alt={slide.title} className='w-full' />
        
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}
