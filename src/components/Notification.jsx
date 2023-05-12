import React, {useRef, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Button from './Button'
import {Link} from 'react-router-dom'
const bell = require('../assets/Notification.png')
const profile = require('../assets/Profile.png')
const down = require('../assets/Down.png')
const Logout = require('../assets/Logout.png')

const Notification = () => {
    const user = useSelector(state => state.persistedReducer.UserSlice?.login.user?.user)
    const [isActive, setActive] = useState(false)
    const toggleRef = useRef(null)

    const handelLogout = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    const handelToggle = () => {
        setActive(!isActive)
    }

    useEffect(() => {
    
        function handleClickOutside(event) {
          if (toggleRef.current && !toggleRef.current.contains(event.target)) {
            setActive(false)
          }else setActive(true)
        }
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

  return (
    <div className="notification">
        <div className="notification__bell">
            <Link to="settings"><img srcSet={`${bell} 2x`} alt="notification" /></Link>
        </div>
        <div className="notification__info">
            <div className="notification__info__txt">
                {
                    user ? <>
                <h3 className="notification__info__txt__name">
                    {user?.username}
                </h3>
                <div className="notification__info__txt__icon">
                    <img srcSet={`${down} 2x`} alt="notification"/>
                </div>
                    </> : <></>
                }
            </div>
            <div className="notification__info__img">
                {
                    user ? <img srcSet={`${profile} 2x`} alt="notification" onClick={handelToggle}/>
                    : 
                    <Link to='/login'>
                        <Button text="Login" bg="main" />
                    </Link>
                }
                <div className={isActive ? "notification__info__img__toggle active" : "notification__info__img__toggle"} ref={toggleRef}>
                    <div className="notification__info__img__toggle__item">
                        <img srcSet={`${Logout} 2x`} alt="" />
                        <span onClick={handelLogout}>Log out</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Notification