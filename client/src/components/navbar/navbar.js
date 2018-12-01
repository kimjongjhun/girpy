import React, { Component } from 'react';
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

class Navbar extends Component {
  state = {
    tab: 0
  };

  constructor() {
    super();

    leagueArray.map((league) => {
      leagues.push(
        <Tab key={ league.leagueId }
             value={ league.leagueId }
             label={ league.name }
             onClick={ () => {
               this.handleChange(league.leagueId);
               store.dispatch(setLeague(league));
               store.dispatch(getLeagueData());
             } }
        />
      );
    });
  }

  handleChange = (leagueId) => {
    this.setState({ ...this.state, tab: leagueId });
  };

  render() {
    return (
      <div>
        <AppBar position="static">
          <Tabs centered value={ this.state.tab }>
            { leagues }
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;