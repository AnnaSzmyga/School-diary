import React from 'react';
import { connect } from 'react-redux';

import ClassesList from './../../features/ClassesList/ClassesList';

class ClassesPage extends React.Component {
    // state = {
    //     singleClassName: ''
    // }
    // handleClick = (name) => {
    //     console.log(name);
    //     this.setState
    // }
    render() {
        return(
            <div>
                <h1>Lista klas</h1>
                <ClassesList classes={this.props.classes} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        classes: state.classes.classes
    }
}


export default connect(mapStateToProps)(ClassesPage);