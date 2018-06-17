import React, { Component } from 'react';

import GroupTile from '../GroupTile';

const GroupsList = () => {
    const groups = [0,1,0,0]

    return (
        <div className="list">
            {groups.map(group => (
                <GroupTile unread={!!group} />
            ))}
        </div>
    );
};

export default GroupsList;
