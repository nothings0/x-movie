import React from "react";
import { Link } from "react-router-dom";
import apiConfig from "../api/apiConfig";
import { category } from "../api/tmdbApi";
import Button from "./Button";

const SlideCard = ({ data, model, categorys }) => {
  
  return model === "one" ? (
    <div className="slide__card">
      <div className="slide__card__top">
        <div className="slide__card__top__img">
          <img
            src={`${apiConfig.w500Image(
              !data.backdrop_path !== null ? data.backdrop_path : data.poster_path
            )}`}
            alt=""
          />
        </div>
        <div className="slide__card__top__txt">
          <div className="slide__card__top__txt__heading">{data.title}</div>
          <div className="slide__card__top__txt__des">{`${data.popularity} popularity`}</div>
          <div className="line">
            <div className="range" style={{width: `${ (1 - data.vote_average / 10)*100}%`}}></div>
          </div>
        </div>
      </div>
      <div className="slide__card__bottom">
        <div className="slide__card__bottom__btn__1">
          <Button text="Drop" bg="blur" />
        </div>
        <div className="slide__card__bottom__btn__2">
          <Link to={`/${category[categorys]}/${data.id}`}>
            <Button text="Watch" bg="main"/>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="slide__card">
        <img
          srcSet={`${apiConfig.originalImage(
            data.backdrop_path !== null ? data.backdrop_path : data.poster_path
          )} 2x`}
          alt=""
        />
        <div className="slide__card__container">
          <div className="slide__card__text">
              <div className="slide__card__text__heading">{data.title}</div>
              <div className="slide__card__text__des">
                <h3>{`${data.vote_count} vote count`}</h3>
                <p>{`${data.vote_average} point`}</p>
              </div>
          </div>
        </div>
        <div className="slide__card__bottom type_two">
          <div className="slide__card__bottom__btn__1">
            <Button bg="blur" icon={true}/>
          </div>
          <div className="slide__card__bottom__btn__2">
            <Link to={`/${category[categorys]}/${data.id}`}>
              <Button text="Watch" bg="main"/>
            </Link>
          </div>
        </div>
        <div className="slide__card__linear"></div>
    </div>
  );
};

export default SlideCard;
