import React, { Component, Fragment } from 'react';
import Table from '@material-ui/core/Table/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography/Typography';

class TeamSummary extends Component {
  renderTableRow = (props) => {
    const tableHead = [];
    const tableBody = [];

    for (const cell in props) {
      console.log('cell', cell);
      console.log('props', props);

      tableHead.push(
        <TableCell>
          <Typography align={ 'center' }>
            { props[cell][0] }
          </Typography>
        </TableCell>
      );

      tableBody.push(
        <TableCell>
          <Typography align={ 'center' }>
            { props[cell][1] }
          </Typography>
        </TableCell>
      );
    }

    return (
      <Fragment>
        { console.log('props', props) }
        <TableHead>
          <TableRow>
            { tableHead }
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            { tableBody }
          </TableRow>
        </TableBody>
      </Fragment>
    );
  };

  render() {
    const { teamSummary } = this.props;

    const teamInfo = {
      position: ['Position', teamSummary.position],
      points: ['Points', teamSummary.points],
      playedGames: ['Played Games', teamSummary.playedGames],
    };

    const teamRecord = {
      wins: ['Wins', teamSummary.won],
      draws: ['Draws', teamSummary.draw],
      losses: ['Losses', teamSummary.lost],
    };

    const teamGoals = {
      goalsFor: ['Goals For', teamSummary.goalsFor],
      goalsAgainst: ['Goals Against', teamSummary.goalsAgainst],
      goalDifference: ['Goal Difference', teamSummary.goalDifference],
    };

    return (
      <Table padding={ 'dense' }>
        { this.renderTableRow(teamInfo) }
        { this.renderTableRow(teamRecord) }
        { this.renderTableRow(teamGoals) }
      </Table>
    );
  }
}

export default TeamSummary;
