import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { compose } from 'redux';


import TopicsList from '../../features/TopicsList/TopicsList';
import { ADD_TOPIC } from '../../../constants/routes';

class TopicsPage extends React.Component {

    render() {
        //console.log(this.props);
        if (!isLoaded(this.props.topics)) {
            return <div>Loading...</div>
          }

          // Show message if there are no todos
          if (isEmpty(this.props.topics)) {
            return <div>Topics List Is Empty</div>
          }
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
    console.log(state);
    return {
        topics: state.firestore.ordered.topics
    }
}
//<TopicsList topics={this.props.topics} />

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'topics'}
    ])
)(TopicsPage);