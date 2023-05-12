import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import GridCard from '../components/GridCard'
import Header from '../components/Header'
import Helmet from '../components/Helmet'

const List = (props) => {
  let location = useLocation()
  const path = location.pathname.split('/')[1]
  const {type} = useParams()
  const title = props.type?.split('_').join(" ") || type?.split('_').join(" ")
  const subTitle = title ? title : "result"

  return (
    <Helmet title={props.title || "searching"}>
    <div className="list">
      <Header full={true}/>
      <div className="list__container">
        <GridCard title={subTitle} category={props.category || path} type={props.type || type} isLoad={true} isSearch={true}/>
      </div>
    </div>
    </Helmet>
  )
}

export default List