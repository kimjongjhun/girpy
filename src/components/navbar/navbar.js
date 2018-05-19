import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import Homepage from '../homepage/homepage';
import League from '../league/league';

const leagueArray = [
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
        <Tab key={league.leagueId} label={league.name} onClick={ () => console.log(league)}></Tab>
    )
});

class Navbar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Tabs centered>
                        <Tab label="Girpy" onClick={}></Tab>
                        {leagues}
                    </Tabs>
                </AppBar>
            </div>
        );
    }
}

export default Navbar;