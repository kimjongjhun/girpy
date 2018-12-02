import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

const styles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
  },
  gridItem: {
    flexGrow: 1,
    padding: theme.spacing.unit
  }
});

class TeamFixtures extends Component {
  constructor(props) {
    super(props);

    console.log('this.props cons', this.props);

    this.state = {
      scheduledRowsPerPage: 5,
      scheduledPage: 0,
      scheduledCount: 0,
      scheduledMatches: [],
      finishedRowsPerPage: 5,
      finishedPage: 0,
      finishedCount: 0,
      finishedMatches: [],
    };
  };

  componentDidMount() {
    this.formatMatches(this.props.fixtures.matches);
    console.log('this.props', this.props);
  };

  componentDidUpdate() {
    console.log('this.state', this.state);
  };

  formatMatches = (matches) => {
    let scheduledArray = [];
    let finishedArray = [];

    matches.map((match) => {
      switch (match.status) {
        case 'SCHEDULED': {
          const scheduledRow = (
            <TableRow key={ match.id }>
              <TableCell><Typography align="justify"><Moment
                format="ddd DD/MM/YY HH:mm">{ match.utcDate }</Moment></Typography></TableCell>
              <TableCell><Typography align="justify">{ match.homeTeam.name }</Typography></TableCell>
              <TableCell><Typography align="justify">{ }</Typography></TableCell>
              <TableCell><Typography align="justify">{ ':' }</Typography></TableCell>
              <TableCell><Typography align="justify">{ }</Typography></TableCell>
              <TableCell><Typography align="justify">{ match.awayTeam.name }</Typography></TableCell>
            </TableRow>
          );

          scheduledArray.push(scheduledRow);
          break;
        }

        case 'FINISHED': {
          const finishedRow = (
            <TableRow key={ match.id }>
              <TableCell><Typography align="justify"><Moment
                format="ddd DD/MM/YY HH:mm">{ match.utcDate }</Moment></Typography></TableCell>
              <TableCell><Typography align="justify">{ match.homeTeam.name }</Typography></TableCell>
              <TableCell><Typography align="justify">{ match.score.fullTime.homeTeam }</Typography></TableCell>
              <TableCell><Typography align="justify">{ ':' }</Typography></TableCell>
              <TableCell><Typography align="justify">{ match.score.fullTime.awayTeam }</Typography></TableCell>
              <TableCell><Typography align="justify">{ match.awayTeam.name }</Typography></TableCell>
            </TableRow>
          );

          finishedArray.push(finishedRow);
          finishedArray.reverse();
          break;
        }

        default:
          break;
      }
    });

    this.setState(
      {
        ...this.state,
        scheduledMatches: scheduledArray,
        finishedMatches: finishedArray,
        scheduledCount: scheduledArray.length,
        finishedCount: finishedArray.length,
      }
    );
  };

  renderHead = () => {
    return (
      <TableHead>
        <TableRow>
          <TableCell>{ 'Date' }</TableCell>
          <TableCell>{ 'Home Team' }</TableCell>
          <TableCell>{ '' }</TableCell>
          <TableCell>{ ':' }</TableCell>
          <TableCell>{ '' }</TableCell>
          <TableCell>{ 'Away Team' }</TableCell>
        </TableRow>
      </TableHead>
    );
  };

  renderFutureFixtures = () => {
    const { scheduledMatches, scheduledCount, scheduledPage, scheduledRowsPerPage } = this.state;
    const emptyRows = scheduledRowsPerPage - Math.min(scheduledRowsPerPage, scheduledMatches.length - scheduledPage * scheduledRowsPerPage);

    return (
      <ListItem>
        <Grid container>
          <Grid container item xs={ 12 } justify={ 'center' }>
            <Typography variant={ 'title' }>
              Future Fixtures
            </Typography>
          </Grid>
          <Grid container item xs={ 12 } justify={ 'center' }>
            <Table fixedHeader={ false } style={ { tableLayout: "auto" } }>
              { this.renderHead() }
              <TableBody>
                { scheduledMatches.slice(scheduledPage * scheduledRowsPerPage, scheduledPage * scheduledRowsPerPage + scheduledRowsPerPage) }
                { emptyRows > 0 && (
                  <TableRow style={ { height: 48 * emptyRows } }>
                    <TableCell colSpan={ 6 } />
                  </TableRow>
                ) }
              </TableBody>
            </Table>
            <TableFooter>
              <TablePagination count={ scheduledCount }
                               onChangePage={ this.handleScheduledChangePage }
                               page={ scheduledPage }
                               rowsPerPage={ this.state.scheduledRowsPerPage }
                               onChangeRowsPerPage={ this.handleScheduledChangeRowsPerPage }
              />
            </TableFooter>
          </Grid>
        </Grid>
      </ListItem>
    );
  };

  renderPastFixtures = () => {
    const { finishedMatches, finishedCount, finishedPage, finishedRowsPerPage } = this.state;
    const emptyRows = finishedRowsPerPage - Math.min(finishedRowsPerPage, finishedMatches.length - finishedPage * finishedRowsPerPage);

    return (
      <ListItem divider>
        <Grid container>
          <Grid container item xs={ 12 } justify={ 'center' }>
            <Typography variant={ 'title' }>
              Past Fixtures
            </Typography>
          </Grid>
          <Grid container item xs={ 12 } justify={ 'center' }>
            <Table>
              { this.renderHead() }
              <TableBody>
                { finishedMatches.slice(finishedPage * finishedRowsPerPage, finishedPage * finishedRowsPerPage + finishedRowsPerPage) }
                { emptyRows > 0 && (
                  <TableRow style={ { height: 48 * emptyRows } }>
                    <TableCell colSpan={ 6 } />
                  </TableRow>
                ) }
              </TableBody>
            </Table>
            <TableFooter>
              <TablePagination count={ finishedCount }
                               onChangePage={ this.handleFinishedChangePage }
                               page={ finishedPage }
                               rowsPerPage={ this.state.finishedRowsPerPage }
                               onChangeRowsPerPage={ this.handleFinishedChangeRowsPerPage }
              />
            </TableFooter>
          </Grid>
        </Grid>
      </ListItem>
    );
  };

  renderBody = () => {
    return (
      <List>
        { this.renderPastFixtures() }
        { this.renderFutureFixtures() }
      </List>
    );
  };

  handleFinishedChangePage = (event, page) => {
    this.setState({ ...this.state, finishedPage: page });
  };

  handleScheduledChangePage = (event, page) => {
    this.setState({ ...this.state, scheduledPage: page });
  };

  handleFinishedChangeRowsPerPage = event => {
    this.setState({ finishedRowsPerPage: event.target.value });
  };

  handleScheduledChangeRowsPerPage = event => {
    this.setState({ scheduledRowsPerPage: event.target.value });
  };

  tablePaginationActions = () => {
    const { classes, page, rowsPerPage, count } = this.props;

    const handleFirstPageButtonClick = (event) => {
      this.props.onChangePage(event, 0);
    };

    const handleBackButtonClick = (event) => {
      this.props.onChangePage(event, this.props.page - 1);
    };

    const handleNextButtonClick = (event) => {
      this.props.onChangePage(event, this.props.page + 1);
    };

    const handleLastPageButtonClick = (event) => {
      this.props.onChangePage(
        event,
        Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
      );
    };

    return (
      <div className={ classes.root }>
        <IconButton
          onClick={ handleFirstPageButtonClick }
          disabled={ page === 0 }
          aria-label="First Page"
        >
          <LastPageIcon />
        </IconButton>
        <IconButton
          onClick={ handleBackButtonClick }
          disabled={ page === 0 }
          aria-label="Previous Page"
        >
          <KeyboardArrowRight />
        </IconButton>
        <IconButton
          onClick={ handleNextButtonClick }
          disabled={ page >= Math.ceil(count / rowsPerPage) - 1 }
          aria-label="Next Page"
        >
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton
          onClick={ handleLastPageButtonClick }
          disabled={ page >= Math.ceil(count / rowsPerPage) - 1 }
          aria-label="Last Page"
        >
          <FirstPageIcon />
        </IconButton>
      </div>
    );
  };

  renderFooter = (page, count) => {
    const { rowsPerPage } = this.state;

    const handleChangePage = (event, page) => {
      this.setState({ page });
    };

    const handleChangeRowsPerPage = event => {
      this.setState({ rowsPerPage: event.target.value });
    };

    return (
      <TableFooter>
        <TableRow>
          <TablePagination
            colSpan={ 3 }
            count={ count }
            rowsPerPage={ rowsPerPage }
            page={ page }
            onChangePage={ handleChangePage }
            onChangeRowsPerPage={ handleChangeRowsPerPage }
            ActionsComponent={ this.tablePaginationActions() }
          />
        </TableRow>
      </TableFooter>
    );
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid item>
        <Grid container item justify={ 'center' }>
          <Paper className={ classes.gridItem }>
            { this.renderBody() }
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(TeamFixtures);