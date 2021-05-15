import React from 'react';
import PropTypes from 'prop-types';
import AddCategory from './AddCategory';

const GifGridItem = ({title, url}) => {
    return (
        <div className="card animate__animated animate__headShake">
            <img width="200" height="100" src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

AddCategory.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default GifGridItem
