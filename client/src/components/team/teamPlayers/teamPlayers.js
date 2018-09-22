import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  gridItem: {
    flexGrow: 1,
    padding: theme.spacing.unit
  }
});

let players = {
  keepers: [],
  defenders: [],
  midfielders: [],
  forwards: []
};

const sortPlayers = (value) => {
  players = {
    keepers: [],
    defenders: [],
    midfielders: [],
    forwards: []
  };
  value.map((player) => {
    switch (player.position) {
      case 'Goalkeeper':
      case 'Keeper': {
        players.keepers.push(
          <TableRow hover>
            <TableCell>{ player.name }</TableCell>
            <TableCell>{ player.nationality }</TableCell>
          </TableRow>
        );
        break;
      }

      case 'Defender':
      case 'Left-Back':
      case 'Right-Back':
      case 'Centre-Back': {
        players.defenders.push(
          <TableRow hover>
            <TableCell>{ player.name }</TableCell>
            <TableCell>{ player.nationality }</TableCell>
          </TableRow>
        );
        break;
      }

      case 'Midfielder':
      case 'Attacking Midfield':
      case 'Central Midfield':
      case 'Defensive Midfield': {
        players.midfielders.push(
          <TableRow hover>
            <TableCell>{ player.name }</TableCell>
            <TableCell>{ player.nationality }</TableCell>
          </TableRow>
        );
        break;
      }

      case 'Attacker':
      case 'Left Wing':
      case 'Right Wing':
      case 'Centre-Forward':
      case 'Striker': {
        players.forwards.push(
          <TableRow hover>
            <TableCell>{ player.name }</TableCell>
            <TableCell>{ player.nationality }</TableCell>
          </TableRow>
        );
        break;
      }
    }
  });
};

class TeamPlayers extends Component {
  render() {
    const { classes } = this.props;

    const tableHeader = () => {
      return (
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Nationality</TableCell>
          </TableRow>
        </TableHead>
      );
    };

    sortPlayers(this.props.players);

    return (
      <Grid item xs={ 12 }>
        <Grid container item justify={ 'center' }>
          <Paper className={ classes.gridItem }>
            <List>
              <ListItem divider>
                <Grid container>
                  <Grid container item xs={ 3 } justify={ 'center' }>
                    <Typography variant={ 'title' }>
                      Forwards
                    </Typography>
                  </Grid>
                  <Grid item xs={ 9 }>
                    <Table>
                      { tableHeader() }
                      <TableBody>
                        { players.forwards }
                      </TableBody>
                    </Table>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem divider>
                <Grid container>
                  <Grid container item xs={ 3 } justify={ 'center' }>
                    <Typography variant={ 'title' }>
                      Midfielders
                    </Typography>
                  </Grid>
                  <Grid item xs={ 9 }>
                    <Table>
                      { tableHeader() }
                      <TableBody>
                        { players.midfielders }
                      </TableBody>
                    </Table>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem divider>
                <Grid container>
                  <Grid container item xs={ 3 } justify={ 'center' }>
                    <Typography variant={ 'title' }>
                      Defenders
                    </Typography>
                  </Grid>
                  <Grid item xs={ 9 }>
                    <Table>
                      { tableHeader() }
                      <TableBody>
                        { players.defenders }
                      </TableBody>
                    </Table>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem divider>
                <Grid container>
                  <Grid container item xs={ 3 } justify={ 'center' }>
                    <Typography variant={ 'title' }>
                      Keepers
                    </Typography>
                  </Grid>
                  <Grid item xs={ 9 }>
                    <Table>
                      { tableHeader() }
                      <TableBody>
                        { players.keepers }
                      </TableBody>
                    </Table>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(TeamPlayers);