import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Photo from '../photo';

function PhotoWall(props) {
    return (
        <div>
            <Link className="addIcon" to="/AddPhoto"></Link>
            <div className="photoGrid">
                { 
                    props.posts
                    .sort( (x, y) => y.id - x.id )
                    .map( (post, index) => <Photo key={post.id} post={post} onRemovePhoto={props.onRemovePhoto} /> ) 
                }
            </div>
        </div>
    );
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
};

export default PhotoWall;