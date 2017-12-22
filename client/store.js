import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
    posts,
    comments
};

// Initialize each reducer's state. defState has to be the same shape as combine reducer keys
const store = createStore(rootReducer, defaultState);
console.log(defaultState.posts);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;