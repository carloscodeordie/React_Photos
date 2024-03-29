import { combineReducers } from 'redux';
import posts from '../../data/posts';

const myPosts = posts;

function postsReducer(state = myPosts, action) {
    switch (action.type) {
        case 'REMOVE_POST':
            return state.filter(post => post.id !== action.post.id);
        case 'ADD_POST':
            return [...state, action.post];
        case 'LOAD_POSTS':
            return action.posts;
        default:
            return state;
    }
}

function commentsReducer(state = {}, action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            if(state[action.postId]) {
                return {...state, [action.postId]: [...state[action.postId], action.comment]};
            } 
            return {...state, [action.postId]: [action.comment]};
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    postsReducer,
    commentsReducer
});


export default rootReducer;