import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  postsreducer: PostsReducer
});

export default rootReducer;
