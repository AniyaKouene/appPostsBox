import { combineReducers } from 'redux';
import PostsReducer from './posts-reducer'
import ActivePostsReducer from './activePost-reducer'

import {reducer as formReducer} from 'redux-form';
const rootReducer = combineReducers({
    posts: PostsReducer,
    activePost: ActivePostsReducer,
    form: formReducer

})

export default rootReducer;