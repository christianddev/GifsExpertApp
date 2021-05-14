import React from 'react'

const GifGridItem = ({id, title, url}) => {
    return (
        <div className="card animate__animated animate__headShake">
            <img width="200" height="100" src={url} alt={title}/>
            {/* <p>{title}</p> */}
        </div>
    )
}

export default GifGridItem
