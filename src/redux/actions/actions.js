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