import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '@material-ui/core/Modal';

import Team from '../team/team';
import Homepage from '../homepage/homepage';
import store from '../../redux/store';
import { getLeagueTable } from '../../redux/actions/league';

class League extends Component {
    componentDidUpdate() {
        store.dispatch(getLeagueTable());
        console.log('this.props hit', this.props);
    }

    render() {
        let modalOpen = false;

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
            fontWeight: 'bold',
            fontSize: '15px'
        };

        let cellStyle1 = {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '15px'
        };

        let cellStyle2 = {
            textAlign: 'left'
        };

        function closeModal() {
            modalOpen = false;
        }

        if (this.props.league.leagueId > 0) {
            let leagueDataRows = [];

            if (this.props.league.leagueData.standing) {
                this.props.league.leagueData.standing.map((team) => {
                    leagueDataRows.push(
                        <TableRow hover onClick={() => {
                            modalOpen = true;
                            console.log('row click hit', modalOpen);
                        }}>
                            <TableCell>{ team.position }</TableCell>
                            <TableCell style={cellStyle2}>
                                <img src={ team.crestURI } height='30'/> { team.teamName }
                            </TableCell>
                            <TableCell>{ team.playedGames }</TableCell>
                            <TableCell>{ team.wins }</TableCell>
                            <TableCell>{ team.draws }</TableCell>
                            <TableCell>{ team.losses }</TableCell>
                            <TableCell>{ team.goals }</TableCell>
                            <TableCell>{ team.goalsAgainst }</TableCell>
                            <TableCell>{ team.goalDifference }</TableCell>
                            <TableCell>{ team.points }</TableCell>
                        </TableRow>
                    )
                });
            }

            return (
                <div>
                    {this.props.league.pending ?
                        (<CircularProgress style={progressStyle}/>) :
                        (<div>
                            <h1>{this.props.league.name}</h1>
                            <Team team={this.props.team}/>
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