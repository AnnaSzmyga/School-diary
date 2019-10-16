import lessons from '../../data/lessons.json';
import { GET_LESSONS_BY_CLASS } from '../actions/lessonsActions';

const initialState = {lessons};

const lessonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LESSONS_BY_CLASS:
            console.log('getLessonsByClass');
    }
    return state;
}

export default lessonsReducer;