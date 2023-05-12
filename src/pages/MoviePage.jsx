import React, {useState, useEffect} from 'react'
import tmdbApi, { movieType, tvType } from '../api/tmdbApi';

import GridCard from '../components/GridCard'
import HeroSlide from '../components/HeroSlide'
import Skeleton from '../components/Skeleton';


const MoviePage = (props) => {
  const [movie, setMovie] = useState([]);
  const [tv, setTv] = useState([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
      const getMovies = async () => {
        setLoading(true)
        const params = {page: 1}
        try {
            const response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
            setMovie(response.results.slice(1, 5));
        } catch {
            console.log('error');
        }
        setLoading(false)
      }
      getMovies();
  }, [])

    useEffect(() => {
        const getMovies = async () => {
          setLoading(true)
            const params = {page: 1}
            try {
                const response = await tmdbApi.getTvList(tvType.airing_today, {params});
                setTv(response.results.slice(0, 4));
            } catch {
                console.log('error');
            }
            setLoading(false)
        }
        getMovies();
    }, []);

  return (
    <>
      {
        isLoading ? <Skeleton type="loading"/> : 
      <>
      <HeroSlide listRender={props.list === "movie" ? movie : tv} categorys={props.list === "movie" ? "movie" : "tv"}/>
      <GridCard title="popular on XMoviez" category={props.list === "movie" ? "movie" : "tv"} type="popular" count={6} isSeeMore={true} isScroll={true}/>
      <GridCard title={`${props.list === "movie" ? "upcoming" : "on the air"} on XMoviez`} category={props.list === "movie" ? "movie" : "tv"} type={props.list === "movie" ? "upcoming" : "on_the_air"} count={6} isSeeMore={true} isScroll={true}/>
      <GridCard title={`${props.list === "movie" ? "now playing" : "top rate"} on XMoviez`} category={props.list === "movie" ? "movie" : "tv"} type={props.list === "movie" ? "now_playing" : "top_rated"} count={6} isSeeMore={true} isScroll={true}/>
      </>
      }
    </>
  )
}

export default MoviePage