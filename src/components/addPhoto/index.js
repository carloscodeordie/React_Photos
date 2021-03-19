import React from 'react';

const handleClick = (event, props) => {
    event.preventDefault();
    const imageLink = event.target.elements.link.value;
    const description = event.target.elements.description.value;
    const post = {
        id: Number(new Date()),
        imageLink: imageLink,
        description: description
    };

    if(imageLink && description) {
        props.startAddingPost(post);
        props.history.push('/');
    }
}

function AddPhoto(props) {
    return (
        <div>
            <div className="form">
                <form onSubmit={(event) => handleClick(event, props)}>
                    <input type="text" name="link" placeholder="URL Link" />
                    <input type="text" name="description" placeholder="Description" />
                    <button>Post</button>
                </form>
            </div>
        </div>
    );    
}

export default AddPhoto;