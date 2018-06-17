import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className="nav-panel">
                <h3 className="nav-panel__header">{this.props.userName}</h3>
                <button className="nav-panel__btn">new group</button>
                <button className="nav-panel__btn">log out</button>
            </div>
        );
    }
}

export default NavBar;
