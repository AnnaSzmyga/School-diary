import { combineReducers } from 'redux';
import classesReducer from './classesReducer';
import topicsReducer from './topicsReducer';

const reducer = combineReducers({
    classes: classesReducer,
    topics: topicsReducer
});

export default reducer;