import React from 'react';
import { Link } from 'react-router-dom';

import Photo from '../photo';
import Comments from '../comments';

function Single(props) {
    const {posts, match} = props;
    const id = Number(match.params.id);
    const post = posts.find(post => post.id === id);
    const comments = props.comments[id] || [];
    const index = props.posts.findIndex(post => post.id === id);
    
    return (
        <section>
            <Link className="backIcon" to="/"></Link>
            <div className="single-photo">
                
                <Photo post={post} {...props} index={index} />
                <Comments addComment={props.addComment} comments={comments} id={id} />
            </div>
        </section>
        
    );
}

export default Single;