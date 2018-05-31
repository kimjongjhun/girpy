import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';

import Homepage from '../homepage/homepage';
import store from '../../redux/store';
import {getLeagueTable} from '../../redux/actions/league';

class League extends Component {
    componentDidUpdate(prevProps) {
        console.log('component did update', this.props);
        store.dispatch(getLeagueTable());

    }

    render() {
        let progressStyle = {
            boxSizing: 'border-box',
            position: 'absolute',
            top: '50%',
            left: '50%',
            height: '100px',
            width: '100px',
            marginTop: '-50px',
            marginLeft: '-50px'
        };

        let cellStyle = {
            textAlign: 'left',
            fontWeight: 'bold',
            fontSize: '15px'
        };

        let cellStyle1 = {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '15px'
        };

        if (this.props.league.leagueId > 0) {
            let leagueDataRows = [];

            if (this.props.league.leagueData.standing) {
                this.props.league.leagueData.standing.map((team) => {
                    leagueDataRows.push(
                        <TableRow hover onClick={() => console.log('row click hit', team)}>
                            <TableCell numeric>{ team.position }</TableCell>
                            <TableCell><img src={ team.crestURI } height='30'/> { team.teamName }</TableCell>
                            <TableCell numeric>{ team.playedGames }</TableCell>
                            <TableCell numeric>{ team.wins }</TableCell>
                            <TableCell numeric>{ team.draws }</TableCell>
                            <TableCell numeric>{ team.losses }</TableCell>
                            <TableCell numeric>{ team.goals }</TableCell>
                            <TableCell numeric>{ team.goalsAgainst }</TableCell>
                            <TableCell numeric>{ team.goalDifference }</TableCell>
                            <TableCell numeric>{ team.points }</TableCell>
                        </TableRow>
                    )
                });
            }

            return (
                <div>
                    {this.props.league.pending ?
                        (<CircularProgress style={progressStyle} />) :
                        (<div>
                            <h1>{this.props.league.name}</h1>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={cellStyle}>Position</TableCell>
                                        <TableCell style={cellStyle1}>Team</TableCell>
                                        <TableCell style={cellStyle}>GP</TableCell>
                                        <TableCell style={cellStyle}>W</TableCell>
                                        <TableCell style={cellStyle}>D</TableCell>
                                        <TableCell style={cellStyle}>L</TableCell>
                                        <TableCell style={cellStyle}>GF</TableCell>
                                        <TableCell style={cellStyle}>GA</TableCell>
                                        <TableCell style={cellStyle}>GD</TableCell>
                                        <TableCell style={cellStyle}>Points</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {leagueDataRows}
                                </TableBody>
                            </Table>
                        </div>)
                    }
                </div>
            );
        } else {
            return (
                <Homepage value={this.props.league}/>
            );
        }
    }
}

export default League;