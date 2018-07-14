import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '@material-ui/core/Modal';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Team from '../team/team';
import Homepage from '../homepage/homepage';
import store from '../../redux/store';
import {getLeagueTable} from '../../redux/actions/league';
import {openModal, closeModal, getTeamFixtures, getTeamPlayers} from '../../redux/actions/team';

const styles = theme => ({
    paper: {
        position: 'absolute',
        height: theme.spacing.unit * 100,
        width: theme.spacing.unit * 200,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 2,
        overflow: 'auto',
    },
});

const modalStyle = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

let selectedTeamIndex = '';

class League extends Component {
    componentDidUpdate() {
        store.dispatch(getLeagueTable());
    }

    openModal = (team) => {
        store.dispatch(getTeamFixtures(team.team.id));
        store.dispatch(getTeamPlayers(team.team.id));
        store.dispatch(openModal(team.team.id));
    };

    closeModal = () => {
        store.dispatch(closeModal());
    };

    render() {
        const {classes} = this.props;

        const progressStyle = {
            boxSizing: 'border-box',
            position: 'absolute',
            top: '50%',
            left: '50%',
            height: '100px',
            width: '100px',
            marginTop: '-50px',
            marginLeft: '-50px'
        };

        const cellBodyStyle = {
            textAlign: 'center'
        };

        const cellBodyStyle1 = {
            textAlign: 'left'
        };

        if (this.props.league.leagueId > 0) {
            let leagueDataRows = [];

            if (this.props.league.leagueData.standings) {
                this.props.league.leagueData.standings[0].table.map((team) => {
                    leagueDataRows.push(
                        <TableRow hover onClick={() => {
                            selectedTeamIndex = this.props.league.leagueData.standings[0].table.indexOf(team);
                            this.openModal(team)
                        }}>
                            <TableCell style={cellBodyStyle}>{team.position}</TableCell>
                            <TableCell style={cellBodyStyle1}>
                                <Grid container>
                                    <Grid container item xs={4} justify={'center'}>
                                        <img src={team.team.crestURI} height='50'/>
                                    </Grid>
                                    <Grid item xs={8}>
                                        {team.team.name}
                                    </Grid>
                                </Grid>
                            </TableCell>
                            <TableCell style={cellBodyStyle}>{team.playedGames}</TableCell>
                            <TableCell style={cellBodyStyle}>{team.won}</TableCell>
                            <TableCell style={cellBodyStyle}>{team.draw}</TableCell>
                            <TableCell style={cellBodyStyle}>{team.lost}</TableCell>
                            <TableCell style={cellBodyStyle}>{team.goalsFor}</TableCell>
                            <TableCell style={cellBodyStyle}>{team.goalsAgainst}</TableCell>
                            <TableCell style={cellBodyStyle}>{team.goalDifference}</TableCell>
                            <TableCell style={cellBodyStyle}>{team.points}</TableCell>
                        </TableRow>
                    )
                });
            }

            return (
                <div>
                    {this.props.league.pending ?
                        (<CircularProgress style={progressStyle}/>) :
                        (<div>
                            <h1 align="center">{this.props.league.name}</h1>
                            <Modal open={this.props.team.modalOpen && this.props.team.fixturesOpen && this.props.team.playersOpen}
                                   onClose={this.closeModal}
                            >
                                <Paper className={classes.paper}
                                       style={modalStyle}
                                >
                                    <Team team={this.props.team} league={this.props.league} index={selectedTeamIndex}/>
                                </Paper>
                            </Modal>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                      <TableCell><Typography variant='header'>Position</Typography></TableCell>
                                      <TableCell><Typography variant='header'>Team</Typography></TableCell>
                                      <TableCell><Typography variant='header'>GP</Typography></TableCell>
                                      <TableCell><Typography variant='header'>W</Typography></TableCell>
                                      <TableCell><Typography variant='header'>D</Typography></TableCell>
                                      <TableCell><Typography variant='header'>L</Typography></TableCell>
                                      <TableCell><Typography variant='header'>GF</Typography></TableCell>
                                      <TableCell><Typography variant='header'>GA</Typography></TableCell>
                                      <TableCell><Typography variant='header'>GD</Typography></TableCell>
                                      <TableCell><Typography variant='header'>Points</Typography></TableCell>
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

export default withStyles(styles)(League);