import { combineReducers } from 'redux';
import classesReducer from './classesReducer';
import topicsReducer from './topicsReducer';
import lessonsReducer from './lessonsReducer';

const reducer = combineReducers({
    classes: classesReducer,
    topics: topicsReducer,
    lessons: lessonsReducer
});

export default reducer;