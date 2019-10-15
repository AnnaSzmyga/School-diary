import React from 'react';
import { Link } from 'react-router-dom';

import { LANDING, HOME, SIGN_IN, SCHEDULE, CLASSES, TOPICS } from '../../../constants/routes';

const Navigation = () => (
    <div>
        <ul>
            <li>
                <Link to={LANDING}>Landing</Link>
            </li>
            <li>
                <Link to={HOME}>Strona główna</Link>
            </li>
            <li>
                <Link to={SCHEDULE}>Grafik tygodniowy</Link>
            </li>
            <li>
                <Link to={CLASSES}>Klasy</Link>
            </li>
            <li>
                <Link to={TOPICS}>Tematy</Link>
            </li>
            <li>
                <Link to={SIGN_IN}>Zaloguj się</Link>
            </li>
        </ul>
    </div>
);

export default Navigation;