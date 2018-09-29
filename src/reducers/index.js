import { combineReducers } from 'redux';
import PostsReducer from './posts-reducer'
import ActivePostsReducer from './activePost-reducer'
const rootReducer = combineReducers({
    posts: PostsReducer,
    activePost: ActivePostsReducer,

})

export default rootReducer;