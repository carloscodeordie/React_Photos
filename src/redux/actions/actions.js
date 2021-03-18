import {database} from '../../database/config';

export function startAddingPost(post) {
    return (dispatch) => {
        return database.ref('posts').update({ [post.id]: post })
            .then( () => {
                dispatch(addPhoto(post));
            })
            .catch(error => {
                console.log(error);
            });
    };
}

export function startLoadingPosts() {
    return (dispatch) => {
        return database.ref('posts').once('value')
            .then( (snapshot) => {
                let posts = [];
                snapshot.forEach(post => {
                    posts.push(post.val());
                });
                dispatch(loadPosts(posts));
            })
            .catch(error => {
                console.log(error);
            });
    };
}

export function loadPosts(posts) {
    return {
        type: 'LOAD_POSTS',
        posts
    };
}

export function startRemovingPost(index, post) {
    return (dispatch) => {
        return database.ref(`posts/${post.id}`).remove()
            .then( () => {
                dispatch(removePost(post));
            })
            .catch(error => {
                console.log(error);
            });
    };
}

export function removePost(post) {
    return {
        type: 'REMOVE_POST',
        post
    };
}

export function addPhoto(post) {
    return {
        type: 'ADD_POST',
        post
    };
}

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    };
}