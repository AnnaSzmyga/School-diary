import React from 'react';
import { Link } from 'react-router-dom';

const Class = ({singleClass }) => {
    return (
        <li><Link to={`/class/${singleClass.name}`}>{singleClass.name}</Link></li>
    )
}

export default Class;