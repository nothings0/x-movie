import React from 'react'
import apiConfig from '../api/apiConfig';
import { Link} from 'react-router-dom';

const SearchList = ({list}) => {
  return (
    <>
      {
        list.length > 0 && list?.map((item, i) => (
          <Link to={`/movie/${item.id}`} key={i}>
            <div className="search__item">
              <div className="search__item__img">
                <img srcSet={`${apiConfig.w220Image(
                  item.backdrop_path !== null ? item.backdrop_path : item.poster_path
                )} 2x`} alt=""/>
              </div>
              <div className="search__item__txt">
                {item.name || item.title}
              </div>
            </div>
          </Link> 
        ))
      }
    </>
  )
}

export default SearchList