import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TeamSummary from '../teamSummary/teamSummary';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2
  }
});

class TeamLogo extends Component {
  renderCrest() {
    if (this.props.team.crestUrl) {
      return (
        <Grid container item justify={ 'center' }>
          <img height='200' src={ this.props.team.crestUrl } />
        </Grid>
      );
    }
  }

  render() {
    const { classes } = this.props;
    const team = this.props.league[this.props.index];

    return (
      <Grid item>
        <Paper className={ classes.paper }>
          <Grid container item spacing={ 16 } justify={ 'center' }>
            { this.renderCrest() }
            <Grid container item justify={ 'center' } xs={ 12 }>
              <Typography variant={ 'title' } gutterBottom>{ this.props.team.name }</Typography>
            </Grid>
            <Grid container item justify={ 'center' } xs={ 12 } spacing={ 16 }>
              <TeamSummary teamSummary={team}/>
              {console.log('team', team)}
            </Grid>
            <Grid container item justify={ 'center' } xs={ 12 }>
              <Button variant="contained" color="primary" href={ this.props.team.website }>Go to Website</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(TeamLogo);