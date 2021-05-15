import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types';

const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {loading && <p className="animate__animated animate__bounceOutRight">Loading</p>}
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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;

