import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const removePhoto = (props, post) => {
    props.startRemovingPost(props.index, post);
    props.history.push('/');
}

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
                <button className="remove-button" onClick={() => removePhoto(props, post)}>
                    <span>Remove</span>
                </button>
                <Link className="button" to={`/single/${post.id}`}>
                    <div className="comment-count">
                        <div className="speech-bubble">

                        </div>
                        { props.comments[post.id] ? props.comments[post.id].length: 0 }
                    </div>
                </Link>
            </div>
        </figure>
    );
}

Photo.propTypes = {
    post: PropTypes.object.isRequired
};

export default Photo;