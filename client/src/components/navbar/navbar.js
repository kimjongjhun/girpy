import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import bundesliga from '../../img/bundesliga.png';
import laLiga from '../../img/laliga.png';
import ligue1 from '../../img/ligue1.png';
import premierLeague from '../../img/premierleague.png';
import serieA from '../../img/seriea.png';

import { setLeague, getLeagueData } from '../../redux/actions/league';
import store from '../../redux/store';

const leagueArray = [
    {
        name: 'Girpy',
        leagueId: 0,
        img: null,
    },
    {
        name: 'Bundesliga',
        leagueId: 2002,
        img: bundesliga,
    },
    {
        name: 'La Liga',
        leagueId: 2014,
        img: laLiga,
    },
    {
        name: 'Ligue 1',
        leagueId: 2015,
        img: ligue1,
    },
    {
        name: 'Premier League',
        leagueId: 2021,
        img: premierLeague,
    },
    {
        name: 'Serie A',
        leagueId: 2019,
        img: serieA,
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