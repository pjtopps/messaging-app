import React, { Component } from 'react';

class GroupTile extends Component {
    render() {
        const { unread } = this.props
        return (
            <div className={`list__item ${unread ? 'list__item--highlight' : ''}`}>
                <div>Group name</div>
                <div>Last active</div>
            </div>
        )
    }
}

export default GroupTile;
