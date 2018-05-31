import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Navbar from './components/navbar/navbar';
import League from './components/league/league';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <League league={this.props.leagueReducer}></League>
            </div>
        );
    }
}

export default connect(state => state)(App);