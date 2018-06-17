import React, { Component } from 'react';

import '../static/styles/index.scss';
import NavBar from '../components/NavBar';
import GroupsList from '../components/GroupsList';

class Homepage extends Component {
    render() {
        return (
            <div className="page">
                <NavBar userName="Gertrude" />
                <GroupsList />
            </div>
        );
    }
}

export default Homepage;
