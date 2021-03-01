import React from 'react';

const Selection = (props) => {

    const {name,salary} =props.detail;
    return (
        <div className="selected-player">
            <h5>Player Name: {name}</h5>
            <h6>salary: {salary}</h6>
        </div>
    );
};

export default Selection;