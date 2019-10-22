import React from 'react';
import Topic from './../Topic/Topic';

const TopicsList = ({ topics }) => {
    return (
        <div>
            <ol className="topics-list">
                {
                    topics.map(topic => <Topic key={topic.title} topic={topic} />)
                }
            </ol>
        </div>
    )
};

export default TopicsList;
