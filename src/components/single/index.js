import React from 'react';
import Photo from '../photo';
import Comments from '../comments';

function Single(props) {
    const {posts, match} = props;
    const id = Number(match.params.id);
    const post = posts.find(post => post.id === id);
    const comments = props.comments;
    
    return (
        <div className="single-photo">
            <Photo post={post} {...props} />
            <Comments addComment={props.addComment} comments={comments} />
        </div>
    );
}

export default Single;