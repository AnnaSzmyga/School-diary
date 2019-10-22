export const ADD_TOPIC = 'ADD_TOPIC';

export const addTopic = (topic) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('topics').add(topic)
            .then(() => {
                dispatch({
                    type: ADD_TOPIC,
                    topic
                });
            })
            .catch((err) => {console.log(err)})
    }
}