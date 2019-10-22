import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import classesReducer from './classesReducer';
import topicsReducer from './topicsReducer';
import lessonsReducer from './lessonsReducer';

const reducer = combineReducers({
    classes: classesReducer,
    topics: topicsReducer,
    lessons: lessonsReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default reducer;