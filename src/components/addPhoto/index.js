import React, { Component } from 'react';

class AddPhoto extends Component {

    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post = {
            id: Number(new Date()),
            imageLink: imageLink,
            description: description
        };

        if(imageLink && description) {
            this.props.onAddPhoto(post);
        }
    }

    render() {
        return (
            <div>
                <h1>Add a new Photo</h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="link" placeholder="URL Link" />
                        <input type="text" name="description" placeholder="Description" />
                        <button>Post</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddPhoto;