export function removePhoto(post) {
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

export function addComment(comment) {
    return {
        type: 'ADD_COMMENT',
        comment
    };
}