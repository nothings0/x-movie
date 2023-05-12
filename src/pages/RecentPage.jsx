import React from 'react'
import Header from '../components/Header'
import Helmet from '../components/Helmet'
import { useSelector } from 'react-redux'
import { Card } from '../components/GridCard'

const RecentPage = () => {
    const data = useSelector(state => state.MovieSlice?.list)
  return (
    <Helmet title="Recent">
    <div className="recent">
        <Header full={true}/>
        {
            data?.length > 0 ? <>
        <div className="recent__wrap">
            <div className="recent__heading">
                Gần Đây
            </div>
            <div className="recent__container">
            {
                data?.map((item, index) => (
                    <Card data={item.data} categorys="movie" key={index}/>
                ))
            }
            </div>
        </div>
            </> : <h2>Không có gì gần đây !</h2>
        }
    </div>
    </Helmet>
  )
}

export default RecentPage