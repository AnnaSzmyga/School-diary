import React from 'react';
import { connect } from 'react-redux';

import ClassLessonsList from '../../features/ClassLessonsList/ClassLessonsList';
import { getLessonsByClass } from '../../../redux/actions/lessonsActions';

const ClassPage = (props) => {

    const singleClassName = props.match.params.class;
    const lessons = props.getLessonsByClass(singleClassName);
    console.log(lessons);
    return (
        <div>
            <h1>Klasa {singleClassName}</h1>
            <ClassLessonsList lessons={lessons} />
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        getLessonsByClass: (name) => dispatch(getLessonsByClass(name))
    }
}

export default connect(null, mapDispatchToProps)(ClassPage);