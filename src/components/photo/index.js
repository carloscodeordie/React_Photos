import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Photo(props) {
    const post = props.post;

    return(
        <figure className="figure">
            <Link to={`/single/${post.id}`}>
                <img className="photo" src={post.imageLink} alt={post.description} />
            </Link>
            <figcaption>
                <p>{post.description}</p>
            </figcaption>
            <div className="button-container">
                <button className="remove-button" onClick={() => {
                    props.removePhoto(post)
                }}>
                    <span>Remove</span>
                </button>
            </div>
        </figure>
    );
}

Photo.propTypes = {
    post: PropTypes.object.isRequired
};

export default Photo;