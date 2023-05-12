import React, { useState, useEffect } from "react";
import SlideCard from "./SlideCard";
import { useNavigate } from "react-router-dom";
import tmdbApi, { movieType } from "../api/tmdbApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const left = require("../assets/left.png");
const right = require("../assets/right.png");

const Slide = ({ title, model, category, type }) => {
  const navigate = useNavigate()
  const [movieItems, setMovieItems] = useState([]);
  const [topRate, setTopRate] = useState([])
  
  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.upcoming, {
          params,
        });
        setMovieItems(response.results.slice(5, 10))
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, [])
  useEffect(() => {
    const getTopRate = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.top_rated, {
          params,
        });
        setTopRate(response.results.slice(1, 5));
      } catch {
        console.log("error");
      }
    };
    getTopRate();
  }, []);

  const handleLoad = () => {
    navigate(`/${category}/a/${type}`)
  }

  return (
    <div className="slide">
      <div className="slide__heading">
        <div className="slide__heading__left">
          <h4 className="slide__heading__left__title">{title}</h4>
          <div className="slide__heading__left__control">
            <img srcSet={`${left} 2x`} alt="notification" />
            <img srcSet={`${right} 2x`} alt="notification" />
          </div>
        </div>
        <div className="slide__heading__right">
          <h5 className="slide__heading__right__txt" onClick={handleLoad}>see more</h5>
          <div className="slide__heading__right__img">
            <img srcSet={`${right} 2x`} alt="notification" />
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="slide__wrap"
      >
        {
          model === "one" ? movieItems.map((item, index) => (
            <SwiperSlide key={index}>
              <SlideCard data={item} model={model} categorys="movie"/>
            </SwiperSlide>
          )) : topRate.map((item, index) => (
            <SwiperSlide key={index}>
              <SlideCard data={item} model={model} categorys="movie"/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default Slide;
// }
