import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';

import TeamLogo from './teamLogo/teamLogo';
import TeamInfo from './teamInfo/teamInfo';
import TeamFixtures from './teamFixtures/teamFixtures';
import TeamPlayers from './teamPlayers/teamPlayers';
import store from '../../redux/store';
import {setTeamTab} from '../../redux/actions/team';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    gridItem: {
        padding: theme.spacing.unit
    }
});

const tabClick = (event, value) => {
    store.dispatch(setTeamTab(value));
};

class Team extends Component {
    render() {
        console.log('v2 team render', this.props);

        const {classes} = this.props;

        return (
            <div>
                <Grid container className={classes.root} spacing={16}>
                    <Grid item xs={3}>
                        <TeamLogo team={this.props.team.teamBaseInfo} />
                    </Grid>
                    <Grid item xs={9}>
                        <Paper>
                            <AppBar position='static'>
                                <Tabs centered
                                      value={this.props.team.teamTab}
                                      onChange={tabClick}
                                >
                                    <Tab label='Team Info'/>
                                    <Tab label='Fixtures'/>
                                    <Tab label='Players'/>
                                </Tabs>
                            </AppBar>
                            {this.props.team.teamTab === 0 &&
                            <TeamInfo team={this.props.team.teamBaseInfo}
                                      league={this.props.league.leagueData.standings[0].table}
                                      index={this.props.index}
                            />
                            }
                            {this.props.team.teamTab === 1 &&
                            <TeamFixtures fixtures={this.props.team.teamFixturesInfo}
                            />
                            }
                            {this.props.team.teamTab === 2 &&
                            <TeamPlayers players={this.props.team.teamBaseInfo.squad}
                            />
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Team);