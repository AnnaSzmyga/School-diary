import React from 'react';
import { Link } from 'react-router-dom';

import { LANDING, HOME, SIGN_IN, CLASSES } from '../../../constants/routes';

const Navigation = () => (
    <div>
        <ul>
            <li>
                <Link to={LANDING}>Landing</Link>
            </li>
            <li>
                <Link to={HOME}>Home</Link>
            </li>
            <li>
                <Link to={CLASSES}>Classes</Link>
            </li>
            <li>
                <Link to={SIGN_IN}>Sign in</Link>
            </li>
        </ul>
    </div>
);

export default Navigation;