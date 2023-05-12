import React from 'react'
import { Link } from 'react-router-dom';
import apiConfig from '../api/apiConfig';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Button from './Button';
import { category } from "../api/tmdbApi";
import "swiper/css";
import "swiper/css/pagination";


const HeroSlide = ({listRender, categorys}) => {
    
  return (
    
    <div className="hero-slide">
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="banner"
      >
        <>
      {
        listRender.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="banner__wrap">
              <img srcSet={`${apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)} 2x`} alt="" />
              <h2 className='banner__title'>{item.title || item.name}</h2>
              <div className="banner__linear"></div>
            </div>
            <div className="banner__btn__1">
              <Button text="Watchlist" bg="blur" icon={true}/>
            </div>
            <div className="banner__btn__2">
            <Link to={`/${category[categorys]}/${item.id}`}>
              <Button text="Watch Now" bg="main"/>
            </Link>
            </div>
          </SwiperSlide>
        ))
      }
      </>
      </Swiper>
    </div>
  )
}

export default HeroSlide