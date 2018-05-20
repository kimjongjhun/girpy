import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Homepage from '../homepage/homepage';
import store from '../../redux/store';
import { getLeagueTable } from '../../redux/actions/league';

class League extends Component {
    componentDidUpdate() {
        if (this.props.league.leagueId > 0) {
            store.dispatch(getLeagueTable(this.props.league.leagueId));
        }
    }

    render() {
        if (this.props.league.leagueId > 0) {
            return (
                <div>
                    <h1>{this.props.league.name} : {this.props.league.leagueId}</h1>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Position</TableCell>
                                <TableCell>Team</TableCell>
                                <TableCell>GP</TableCell>
                                <TableCell>W</TableCell>
                                <TableCell>D</TableCell>
                                <TableCell>L</TableCell>
                                <TableCell>GF</TableCell>
                                <TableCell>GA</TableCell>
                                <TableCell>GD</TableCell>
                                <TableCell>Points</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
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