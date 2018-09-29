import { AT_POSTS } from '../actions/action-types';

export default function activePostsReducer(state = null, action) {
    switch (action.type) {
        case AT_POSTS.READ:
            return action.payload;
            default:
            return state;
    }
}