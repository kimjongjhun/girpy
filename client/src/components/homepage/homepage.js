import React, {Component} from 'react';

class Homepage extends Component {
    render() {
        return (
          <h1>{this.props.value.name} : {this.props.value.leagueId}</h1>
        );
    }
}

export default Homepage;