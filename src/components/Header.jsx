import React, { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import tmdbApi from "../api/tmdbApi"
import Notification from "./Notification"
import SearchList from "./SearchList";

const search = require("../assets/Search.png");

const headerLink = [
  {
    text: "Movies",
    path: "/",
  },
  {
    text: "TV Shows",
    path: "/tv-show",
  },
];
const Header = (props) => {
  const { pathname } = useLocation();
  const headerRef = useRef();
  const active = headerLink.findIndex((e) => e.path === pathname)
  const [toggle, setToggle] = useState(false)
  const [keyword, setKeyword] = useState("")
  const [value, setValue] = useState("")
  const [list, setList] = useState([])
  const inputRef = useRef()
  
  useEffect(() => {
    
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setToggle(false)
      }else setToggle(true)
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const shrinkHeader = () => {
      if (window.scrollY > 40 || document.documentElement.scroll > 40) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setKeyword(value)
  }

  useEffect(() => {
    if(keyword){
      const params = {
        query: keyword
      }
      const getSearch = async() => {
        const res = await tmdbApi.search('multi', {params})
        setList(res.results)
      }
      getSearch()
    }
  }, [keyword])

  return (
    <div ref={headerRef} className={`header ${props.full ? "full" : ""}`}>
      {!props.full ? (
        <>
          <div className="header__left">
            {headerLink.map((item, index) => (
              <div
                className={`header__left__item ${
                  index === active ? "active" : ""
                }`}
                key={index}
              >
                <Link to={item.path}>{item.text}</Link>
              </div>
            ))}
          </div>
          <div className="header__right" ref={inputRef}>
            <input
              type="text"
              placeholder="Search"
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            <img className="img-search" srcSet={`${search} 2x`} alt="" onClick={handleSubmit}/>
            {
              toggle ? <div className="header__right__result">
              <SearchList list={list}/>
            </div> : <></>
            }
          </div>
        </>
      ) : (
        <>
          <div className="header__right" ref={inputRef}>
            <input
              type="text"
              placeholder="Search"
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            <img className="img-search" srcSet={`${search} 2x`} alt="" onClick={handleSubmit}/>
            {
              toggle ? <div className="header__right__result">
              <SearchList list={list}/>
            </div> : <></>
            }
          </div>
          <div className="header__left">
              <Notification/>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
