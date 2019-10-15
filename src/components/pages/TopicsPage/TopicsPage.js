import React from 'react';
import TopicsList from '../../features/TopicsList/TopicsList';

const Topics = () => (
    <div>
        <h1>Lista tematów:</h1>
        <TopicsList />
        <button className="topics__btn-addTopic">Dodaj temat</button>
    </div>
);

export default Topics;