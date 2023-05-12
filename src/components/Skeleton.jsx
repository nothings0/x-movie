import React from 'react'

const Skeleton = ({type}) => {
    const Loading = () => (
        <div className="loadSk">
            <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66">
                <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
            </svg>
        </div>
    );
    if(type === "loading") return <Loading />
}

export default Skeleton