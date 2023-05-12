import React from 'react'
import Notification from './Notification'
import Slide from './Slide'

const RightSide = () => {
  return (
    <div className="right-side">
      <Notification/>
      <Slide title="continue" model="one" type="popular" category="movie"/>
      <Slide title="Top Rated" model="two" type="top_rated" category="movie"/>
    </div>
  )
}

export default RightSide