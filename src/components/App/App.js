import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from '../features/Navigation/Navigation';
import { LANDING, HOME, SCHEDULE, CLASSES, CLASS, TOPICS, ADD_TOPIC, SIGN_IN, SIGN_UP } from '../../constants/routes';
import Landing from '../pages/Landing/Landing';
import HomePage from '../pages/HomePage/HomePage';
import SchedulePage from '../pages/SchedulePage/SchedulePage';
import ClassesPage from '../pages/ClassesPage/ClassesPage';
import ClassPage from '../pages/ClassPage/ClassPage';
import TopicsPage from '../pages/TopicsPage/TopicsPage';
import AddTopicPage from '../pages/AddTopicPage/AddTopicPage';
import SignInPage from '../pages/SignInPage/SignInPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

const App = () => (
    <Router>
        <div>
            <Navigation />
        </div>
        <Switch>
            <Route path={LANDING} exact component={Landing} />
            <Route path={HOME} exact component={HomePage} />
            <Route path={SCHEDULE} exact component={SchedulePage} />
            <Route path={CLASSES} exact component={ClassesPage} />
            <Route path={CLASS} exact component={ClassPage} />
            <Route path={TOPICS} exact component={TopicsPage} />
            <Route path={ADD_TOPIC} exact component={AddTopicPage} />
            <Route path={SIGN_IN} exact component={SignInPage} />
            <Route path={SIGN_UP} exact component={SignUpPage} />
        </Switch>
    </Router>
);

export default App;