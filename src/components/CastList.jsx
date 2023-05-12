import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import tmdbApi from '../api/tmdbApi';
import apiConfig from '../api/apiConfig';
import Skeleton from './Skeleton';

const CastList = props => {

    const {category} = useParams();

    const [casts, setCasts] = useState([]);
  const [isLoading, setLoading] = useState(true)


    useEffect(() => {
        const getCredits = async () => {
            setLoading(true)
            const res = await tmdbApi.credits(category, props.id);
            setCasts(res.cast.slice(0, 5));
            setLoading(false)
        }
        getCredits();
    }, [category, props.id]);
    return (
        <>
        {
            isLoading ? <Skeleton type="loading"/> : 
            <>
                {
                    casts && (
                        <div className="casts">
                    <div className="casts__header">Casts</div>
                    <div className="casts__wrap">
                    {
                    casts.map((item, i) => (
                        <div key={i} className="casts__item">
                            <div className="casts__item__img" style={{backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`}}></div>
                            <p className="casts__item__name">{item.name}</p>
                        </div>
                    ))
                    }
                    </div>
                </div>
                    )
                }
            </>
        }
        </>
    );
}

export default CastList;