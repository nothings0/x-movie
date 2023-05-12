import React, { useState, useEffect } from "react";
import {useDispatch} from 'react-redux'
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import apiConfig from "../api/apiConfig";
import tmdbApi, { category, movieType, tvType } from "../api/tmdbApi";
import PropTypes from "prop-types";
import Button from "./Button";
import Search from "./Search";
import { AddMovie } from "../redux/apiReq";
import Skeleton from "./Skeleton";
const right = require("../assets/right.png");


const GridCard = (props) => {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const { keyword } = useParams()
  const navigate = useNavigate()
  const [isLoading, setLoading] = useState(true)


  const count = props.count ? props.count : 10
  useEffect(() => {
    const getListRender = async () => {
      let response
      setLoading(true)
      
        const params = {}

        try {
          switch(props.category) {
            case category.movie:
              switch (props.type) {
                case movieType.upcoming:
                  response = await tmdbApi.getMoviesList(movieType.upcoming, {params})
                  break
                case movieType.popular:
                  response = await tmdbApi.getMoviesList(movieType.popular, {params})
                  break
                case movieType.top_rated:
                  response = await tmdbApi.getMoviesList(movieType.top_rated, {params})
                  break
                case movieType.now_playing:
                  response = await tmdbApi.getMoviesList(movieType.now_playing, {params})
                  break
                case movieType.trending:
                  response = await tmdbApi.getMoviesList(movieType.trending, {params})
                  break
                case "similar":
                  response = await tmdbApi.similar(props.category, props.id, {params})
                  break
              }
              break
            case category.tv:
              switch (props.type) {
                case tvType.on_the_air:
                  response = await tmdbApi.getTvList(tvType.on_the_air, {params})
                  break
                case tvType.popular:
                  response = await tmdbApi.getTvList(tvType.popular, {params})
                  break
                case tvType.top_rated:
                  response = await tmdbApi.getTvList(tvType.top_rated, {params})
                  break
                case tvType.airing_today:
                  response = await tmdbApi.getTvList(tvType.airing_today, {params})
                  break
                case "similar":
                  response = await tmdbApi.similar(props.category, props.id, {params})
                  break
              }
              break
          }
        } catch (error) {
          console.log(error);
        }

      if(keyword === undefined){
        const params = {}
        try {
          switch(props.category) {
            case category.movie:
              switch (props.type) {
                case movieType.upcoming:
                  response = await tmdbApi.getMoviesList(movieType.upcoming, {params})
                  break
                case movieType.popular:
                  response = await tmdbApi.getMoviesList(movieType.popular, {params})
                  break
                case movieType.top_rated:
                  response = await tmdbApi.getMoviesList(movieType.top_rated, {params})
                  break
                case movieType.now_playing:
                  response = await tmdbApi.getMoviesList(movieType.now_playing, {params})
                  break
                case movieType.trending:
                  response = await tmdbApi.getMoviesList(movieType.trending, {params})
                  break
                case "similar":
                  response = await tmdbApi.similar(props.category, props.id, {params})
                  break
              }
              break
            case category.tv:
              switch (props.type) {
                case tvType.on_the_air:
                  response = await tmdbApi.getTvList(tvType.on_the_air, {params})
                  break
                case tvType.popular:
                  response = await tmdbApi.getTvList(tvType.popular, {params})
                  break
                case tvType.top_rated:
                  response = await tmdbApi.getTvList(tvType.top_rated, {params})
                  break
                case tvType.airing_today:
                  response = await tmdbApi.getTvList(tvType.airing_today, {params})
                  break
                case "similar":
                  response = await tmdbApi.similar(props.category, props.id, {params})
                  break
              }
              break
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        const params = {
          query: keyword
        }
        response = await tmdbApi.search(props.category, {params});
      }
      setItems(response?.results.slice(0, count));
      setTotalPage(response?.total_pages);
      setLoading(false)

    }
    
    getListRender();
  }, [props.category, props.type, keyword])

  const loadMore = async () => {
    setLoading(true)

    let response
      
      if(keyword === undefined){
        const params = {
          page: page + 1
      };
        try {
          switch(props.category) {
            case category.movie:
              switch (props.type) {
                case movieType.upcoming:
                  response = await tmdbApi.getMoviesList(movieType.upcoming, {params})
                  break
                case movieType.popular:
                  response = await tmdbApi.getMoviesList(movieType.popular, {params})
                  break
                case movieType.top_rated:
                  response = await tmdbApi.getMoviesList(movieType.top_rated, {params})
                  break
                case movieType.now_playing:
                  response = await tmdbApi.getMoviesList(movieType.now_playing, {params})
                  break
                case movieType.trending:
                  response = await tmdbApi.getMoviesList(movieType.trending, {params})
                  break
                case "similar":
                  response = await tmdbApi.similar(props.category, props.id, {params}, {params})
                  break
              }
              break
            case category.tv:
              switch (props.type) {
                case tvType.on_the_air:
                  response = await tmdbApi.getTvList(tvType.on_the_air, {params})
                  break
                case tvType.popular:
                  response = await tmdbApi.getTvList(tvType.popular, {params})
                  break
                case tvType.top_rated:
                  response = await tmdbApi.getTvList(tvType.top_rated, {params})
                  break
                case tvType.airing_today:
                  response = await tmdbApi.getTvList(tvType.airing_today, {params})
                  break
                case "similar":
                  response = await tmdbApi.similar(props.category, props.id, {params}, {params})
                  break
              }
              break
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        const params = {
          page: page + 1,
          query: keyword
        }
        response = await tmdbApi.search(props.category, {params});
      }
      setItems([...items, ...response.results.slice(0, count)]);
      setPage(response?.page);
      setLoading(false)
  }

  const handleLoad = () => {
    navigate(`/${props.category}/a/${props.type}`)
  }

  return (
    <>
      {
        isLoading ? <Skeleton type="loading"/> : 
        <>
        <div className="gridCard">
        {
          props.isSearch ? <Search category={props.category} keyword={keyword}/> : <></>
        }
        {
          items.length > 0 ? <>
            <div className="gridCard__heading">
              <h2>{props.title}</h2>
              {
                props.isSeeMore ? <div className="gridCard__heading__right">
                <h5 className="gridCard__heading__right__txt" onClick={handleLoad}>see more</h5>
                <div className="gridCard__heading__right__img">
                  <img srcSet={`${right} 2x`} alt="notification" />
                </div>
              </div> : <></>
              }
            </div>
            <div className={props.isScroll ? "gridCard__wrap scroll" : "gridCard__wrap"}>
              {items?.map((item, index) => (
                <Card data={item} key={index} categorys={props.category}/>
              ))}
            </div>
            {page < totalPage && props.isLoad ? (
                <div className="gridCard__loadmore">
                  <Button text="Load more" bg="outline" onClick={loadMore}/>
                </div>
              ) : null
            }
          </> : <h2>Không tìm thấy kết quả nào!</h2>
        }
        </div>
        </>
      }
    
    </>
  );
};

GridCard.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  isLoad: PropTypes.bool
};

export const Card = ({ data, categorys }) => {
  // console.log(data);
  const dispatch = useDispatch()
  const {pathname} = useLocation()
  const link = '/' + category[categorys] + '/' + data?.id
  const bg = apiConfig.w220Image(
    data.backdrop_path !== null ? data.backdrop_path : data.poster_path
  )

  const handelAdd = () => {
    const newMovie = {
      data
    }
    AddMovie(dispatch, newMovie)
    alert("Success!!!")
  }

  return (
      <div className="gridCard__card">
        <img
          src={`${bg}`}
          alt=""
        />
        {
          pathname.split("/")[1] === "recent" ? <></> : <div className="card__btn__1">
          <Button bg="blur" icon={true} onClick={handelAdd}/>
        </div>
        }
        <div className="card__btn__2">
          <Link to={link}>
            <Button text="Watch" bg="main"/>
          </Link>
        </div>
        <div className="gridCard__card__linear"></div>
        <div className="gridCard__card__title">{data.title || data.name}</div>
        <div className="gridCard__card__star"></div>
      </div>
  );
};

export default GridCard;
