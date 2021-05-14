import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {<p className={!loading ? 'animate__animated animate__bounceOutRight': null}>Loading</p>}
            <div className="card-grid">
                {
                    images.map((i) => (
                        <GifGridItem 
                            key={i.id} 
                            {...i}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid
