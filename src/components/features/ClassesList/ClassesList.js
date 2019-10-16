import React from 'react';
import Class from './../Class/Class';

const ClassesList = ({ classes }) => {
    return (
        <div>
            <ul>
                {
                    classes.map(singleClass => <Class key={singleClass.name} singleClass={singleClass} />)
                }
            </ul>
        </div>
    )
}

export default ClassesList;