import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

// combine reducers. but each reducers have their own states.
const rootReducer = combineReducers({
    posts, comments, routing: routerReducer 
});

export default rootReducer;