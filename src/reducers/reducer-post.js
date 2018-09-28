import { AT_POSTS} from '../actions/action-types';

export default function PostsReducer(state = [], action) {
    switch (action.type) {
        case AT_POSTS.READ_ALL:
            return action.payload;
            default:
            return state;
    }
}