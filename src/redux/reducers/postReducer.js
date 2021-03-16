import posts from '../../data/posts';

const myPosts = posts;

const postReducer = function posts(state = myPosts, action) {
    switch (action.type) {
        case 'REMOVE_POST':
            return state.filter(post => post.id !== action.post.id);
        case 'ADD_POST':
            return [...state, action.post];
        default:
            return state;
    }
}

export default postReducer;