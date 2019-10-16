import React from 'react';

const Topic = ({topic}) => (
    <div className="topic">
        <p>{topic.title}</p>
        <button className="topic__btn-delete">usuń</button>
        <button className="topic__btn-edit">edytuj</button>
    </div>
);

export default Topic;