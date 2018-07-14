import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import { setLeague, getLeagueData } from '../../redux/actions/league';
import store from '../../redux/store';

const leagueArray = [
    {
        name: 'Girpy',
        leagueId: 0
    },
    {
        name: 'Bundesliga',
        leagueId: 2002
    },
    {
        name: 'La Liga',
        leagueId: 2014
    },
    {
        name: 'Ligue 1',
        leagueId: 2015
    },
    {
        name: 'Premier League',
        leagueId: 2021
    },
    {
        name: 'Serie A',
        leagueId: 2019
    },
];
const leagues = [];

leagueArray.map((league) => {
    leagues.push(
        <Tab key={ league.leagueId }
             label={ league.name }
             onClick={ () => {
                 store.dispatch(setLeague(league));
                 store.dispatch(getLeagueData());
             }}
        />
    )
});

class Navbar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Tabs centered>
                        {leagues}
                    </Tabs>
                </AppBar>
            </div>
        );
    }
}

export default Navbar;