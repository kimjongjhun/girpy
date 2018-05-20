import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import { setLeague } from '../../redux/actions/league';
import store from '../../redux/store';

const leagueArray = [
    {
        name: 'Girpy',
        leagueId: 0
    },
    {
        name: 'Bundesliga',
        leagueId: 452
    },
    {
        name: 'La Liga',
        leagueId: 455
    },
    {
        name: 'Ligue 1',
        leagueId: 450
    },
    {
        name: 'Premier League',
        leagueId: 445
    },
    {
        name: 'Serie A',
        leagueId: 456
    },
];
const leagues = [];

leagueArray.map((league) => {
    leagues.push(
        <Tab key={ league.leagueId }
             label={ league.name }
             onClick={ () => {
                 store.dispatch(setLeague(league))
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