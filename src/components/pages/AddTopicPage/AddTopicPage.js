import React from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';

//import { TOPICS } from '../../../constants/routes';
import { addTopic } from '../../../redux/actions/topicsActions';

class AddTopicPage extends React.Component {
    state = {
        title: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTopic(this.state);
        console.log('submit');
    }

    handleChange = (e) => {
        this.setState({title: e.target.value});
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Nowy temat:</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChange}
                        placeholder="Wpisz temat"
                    />
                    <button type="submit" className="topics__btn-addTopic">Dodaj temat</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        addTopic: (topic) => dispatch(addTopic(topic))
    }
}

export default connect(null, mapDispatchToProps)(AddTopicPage);
