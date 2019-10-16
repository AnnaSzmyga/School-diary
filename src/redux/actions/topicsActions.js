export const ADD_TOPIC = 'ADD_TOPIC';

export const addTopic = (topic) => {
    return (dispatch, getState) => {
        //make async call to database
        dispatch({
            type: ADD_TOPIC,
            topic
        });
    }
}