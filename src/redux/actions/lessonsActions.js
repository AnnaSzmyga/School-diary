export const GET_LESSONS_BY_CLASS = 'GET_LESSONS_BY_CLASS';

export const getLessonsByClass = (singleClassName) => {
    return (dispatch, getState) => {
        //make async call to database
        dispatch({
            type: GET_LESSONS_BY_CLASS,
            singleClassName
        });
    }
}