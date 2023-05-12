import React, { useState, useCallback, useEffect } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { category } from "../api/tmdbApi";


const Search = (props) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "")

  const goToSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      navigate(`/${category[props.category]}/search/${keyword}`)
    }
  }, [keyword, props.category, navigate])

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [keyword, goToSearch])

  return (
    <div className="search">
      <div className="search__box">
        <input
            type="text"
            placeholder="Enter keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
        />
        <Button text="Search" bg="main" onClick={goToSearch}/>
      </div>
    </div>
  );
};

export default Search;
