import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../features/Navigation/Navigation';
import { LANDING, HOME, CLASSES, SIGN_IN, SIGN_UP } from '../../constants/routes';
import Landing from '../pages/Landing/Landing';
import Home from '../pages/Home/Home';
import ClassesPage from '../pages/ClassesPage/ClassesPage';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';

const App = () => (
    <Router>
        <div>
            <Navigation />
        </div>
        <Switch>
            <Route path={LANDING} exact component={Landing} />
            <Route path={HOME} exact component={Home} />
            <Route path={CLASSES} exact component={ClassesPage} />
            <Route path={SIGN_IN} exact component={SignIn} />
            <Route path={SIGN_UP} exact component={SignUp} />
        </Switch>
    </Router>
);

export default App;