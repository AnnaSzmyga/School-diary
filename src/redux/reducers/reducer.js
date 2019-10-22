import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'

import classesReducer from './classesReducer';
import topicsReducer from './topicsReducer';
import lessonsReducer from './lessonsReducer';

const reducer = combineReducers({
    classes: classesReducer,
    topics: topicsReducer,
    lessons: lessonsReducer,
    firestoreReducer: firestoreReducer
});

export default reducer;