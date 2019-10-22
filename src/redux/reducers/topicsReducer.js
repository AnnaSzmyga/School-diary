//import topics from '../../data/topics.json';
import { ADD_TOPIC } from '../actions/topicsActions';

const initialState = {};

const topicsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TOPIC:
            console.log('addTopic', action.topic);
        default:
            return state;
    }
}

export default topicsReducer;