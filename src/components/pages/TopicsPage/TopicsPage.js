import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import TopicsList from '../../features/TopicsList/TopicsList';
import { ADD_TOPIC } from '../../../constants/routes';
//import { addTopic } from '../../../redux/actions/topicsActions';

class TopicsPage extends React.Component {

    render() {
        return (
            <div>
                <h1>Lista tematów:</h1>
                <TopicsList topics={this.props.topics} />
                <Link to={ADD_TOPIC}>
                    <button>Dodaj temat</button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        topics: state.topics.topics
    }
}

// const mapDispatchToProps = (dispatch)=> {
//     return {
//         addTopic: (topic) => dispatch(addTopic(topic))
//     }
// }

export default connect(mapStateToProps)(TopicsPage);