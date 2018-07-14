import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit,
    },
    gridItem: {
        padding: theme.spacing.unit
    },
    paper: {
        padding: theme.spacing.unit,
    }
});

class TeamInfo extends Component {
    render() {
        console.log('v2 teaminfo render hit', this.props);

        const {classes} = this.props;

        const cellHeaderStyle = {
            textAlign: 'center',
            fontWeight: 'bold',
        };

        const cellBodyStyle = {
            textAlign: 'center'
        };

        const teamInfo = () => {
            return (
                <ListItem divider>
                    <Grid container>
                        <Grid container item xs={3} justify={'center'}>
                            <Typography variant={'title'}>
                                Team Info
                            </Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={cellHeaderStyle}>Position</TableCell>
                                        <TableCell style={cellHeaderStyle}>Games Played</TableCell>
                                        <TableCell style={cellHeaderStyle}>Points</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell style={cellBodyStyle}>
                                            {this.props.league[this.props.index].position}
                                        </TableCell>
                                        <TableCell style={cellBodyStyle}>
                                            {this.props.league[this.props.index].playedGames}
                                        </TableCell>
                                        <TableCell style={cellBodyStyle}>
                                            {this.props.league[this.props.index].points}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Grid>
                    </Grid>
                </ListItem>
            )
        };
        const teamRecord = () => {
            return (
                <ListItem divider>
                    <Grid container>
                        <Grid container item xs={3} justify={'center'}>
                            <Typography variant={'title'}>
                                Team Record
                            </Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={cellHeaderStyle}>Wins</TableCell>
                                        <TableCell style={cellHeaderStyle}>Draws</TableCell>
                                        <TableCell style={cellHeaderStyle}>Losses</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell style={cellBodyStyle}>
                                            {this.props.league[this.props.index].won}
                                        </TableCell>
                                        <TableCell style={cellBodyStyle}>
                                            {this.props.league[this.props.index].draw}
                                        </TableCell>
                                        <TableCell style={cellBodyStyle}>
                                            {this.props.league[this.props.index].lost}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Grid>
                    </Grid>
                </ListItem>
            )
        };
        const teamGoals = () => {
            return (
                <ListItem>
                    <Grid container>
                        <Grid container item xs={3} justify={'center'}>
                            <Typography variant={'title'}>
                                Team Goals
                            </Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={cellHeaderStyle}>Goals For</TableCell>
                                        <TableCell style={cellHeaderStyle}>Goals Against</TableCell>
                                        <TableCell style={cellHeaderStyle}>Goal Differential</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell style={cellBodyStyle}>
                                            {this.props.league[this.props.index].goalsFor}
                                        </TableCell>
                                        <TableCell style={cellBodyStyle}>
                                            {this.props.league[this.props.index].goalsAgainst}
                                        </TableCell>
                                        <TableCell style={cellBodyStyle}>
                                            {this.props.league[this.props.index].goalDifference}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Grid>
                    </Grid>
                </ListItem>
            )
        };

        return (
            <Grid item xs={12}>
                <Grid container item justify={'center'}>
                    <Paper className={classes.root}>
                        <Table>
                            <TableBody>
                                <List>
                                    {teamInfo()}
                                    {teamRecord()}
                                    {teamGoals()}
                                </List>
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(TeamInfo);