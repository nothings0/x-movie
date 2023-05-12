import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CastList from "../components/CastList";
import VideoList from "../components/VideoList";
import GridCard from "../components/GridCard";
import tmdbApi from "../api/tmdbApi";
import apiConfig from "../api/apiConfig";
import Helmet from "../components/Helmet";
import Skeleton from "../components/Skeleton";

const Detail = () => {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const getDetail = async () => {
      setLoading(true)
      const res = await tmdbApi.detail(category, id, { params: {} });
      setItem(res);
      setLoading(false)
    };
    getDetail();
  }, [category, id]);
  return (
    <>
      {
        isLoading ? <Skeleton type="loading"/> : 
        <>
          <Helmet title={item?.name || item?.title}>
      {item && (
        <>
          <div
            className="detail"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className="detail-content">
            <div className="detail-content__poster">
              <div
                className="detail-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="detail-content__info">
              <h1 className="title">{item.title || item.name}</h1>
              <div className="genres">
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className="genres__item">
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{item.overview}</p>
              <CastList id={item.id} />
            </div>
          </div>
          <div className="section">
            <div className="section__video">
              <VideoList id={item.id} />
            </div>
            <div className="section__similar">
              <GridCard title="Similar" category={category} type="similar" isLoad={true} id={item.id}/>
            </div>
          </div>
        </>
      )}
    </Helmet>
        </>
      }
    
    </>
  );
};

export default Detail;
