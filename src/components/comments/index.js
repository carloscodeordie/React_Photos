import React from 'react';

function Comments(props) {
    return(
        <div className="comment">
            {
                props.comments.map((comment, index) => {
                    return (
                        <p key={index}>{comment}</p>
                    );
                })
            }
            <form className="comment-form" onSubmit={(event) => {
                event.preventDefault();
                const comment = event.target.elements.comment.value;
                props.addComment(comment, props.id);
                event.target.elements.comment.value = '';
            }}>
                <input type="text" placeholder="Comments" name="comment" />
                <input type="submit" />
            </form>
        </div>
    );
}

export default Comments;