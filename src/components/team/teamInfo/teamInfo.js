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

import TableColumn from '../../../common/components/tableColumn/tableColumn';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit,
    },
    gridItem: {
        padding: theme.spacing.unit,
    },
    paper: {
        padding: theme.spacing.unit,
    },
});

class TeamInfo extends Component {
    render() {
        const {classes} = this.props;

        const teamInfo = () => {
            const columns = [
                {
                    head: 'Position',
                    body: this.props.league[this.props.index].position
                },
                {
                    head: 'Games Played',
                    body: this.props.league[this.props.index].playedGames
                },
                {
                    head: 'Points',
                    body: this.props.league[this.props.index].points
                }
            ];

            const displayColumns = [];

            columns.map((column) => {
                displayColumns.push(
                    <Grid item xs={4}>
                        <TableColumn columnData={column}/>
                    </Grid>
                )
            });

            return (
                <ListItem divider>
                    <Grid container>
                        <Grid container item xs={3} justify={'center'}>
                            <Typography variant={'title'}>
                                Team Info
                            </Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Grid container>
                                {displayColumns}
                            </Grid>
                        </Grid>
                    </Grid>
                </ListItem>
            )
        };

        const teamRecord = () => {
            const columns = [
                {
                    head: 'Wins',
                    body: this.props.league[this.props.index].won
                },
                {
                    head: 'Draws',
                    body: this.props.league[this.props.index].draw
                },
                {
                    head: 'Losses',
                    body: this.props.league[this.props.index].lost
                }
            ];

            const displayColumns = [];

            columns.map((column) => {
                displayColumns.push(
                    <Grid item xs={4}>
                        <TableColumn columnData={column}/>
                    </Grid>
                )
            });

            return (
                <ListItem divider>
                    <Grid container>
                        <Grid container item xs={3} justify={'center'}>
                            <Typography variant={'title'}>
                                Team Record
                            </Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Grid container>
                                {displayColumns}
                            </Grid>
                        </Grid>
                    </Grid>
                </ListItem>
            )
        };

        const teamGoals = () => {
            const columns = [
                {
                    head: 'Goals For',
                    body: this.props.league[this.props.index].goalsFor
                },
                {
                    head: 'Goals Against',
                    body: this.props.league[this.props.index].goalsAgainst
                },
                {
                    head: 'Goal Differential',
                    body: this.props.league[this.props.index].goalDifference
                }
            ];

            const displayColumns = [];

            columns.map((column) => {
                displayColumns.push(
                    <Grid item xs={4}>
                        <TableColumn columnData={column}/>
                    </Grid>
                )
            });

            return (
                <ListItem>
                    <Grid container>
                        <Grid container item xs={3} justify={'center'}>
                            <Typography variant={'title'}>
                                Team Goals
                            </Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Grid container>
                                {displayColumns}
                            </Grid>
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