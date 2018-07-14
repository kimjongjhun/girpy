import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    gridItem: {
        padding: theme.spacing.unit * 2
    }
});

class TeamLogo extends Component {
    render() {
        const {classes} = this.props;

        return (
            <Grid item>
                <Paper className={classes.gridItem}>
                    <Grid container item justify={'center'}>
                        <img height='200' src={this.props.team.crestUrl}/>
                    </Grid>
                    <br/>
                    <Grid container item justify={'center'}>
                        <h2 onClick={() => console.log('h2', this.props)}>{this.props.team.name}</h2>
                    </Grid>
                </Paper>
            </Grid>
        )
    }
}

export default withStyles(styles)(TeamLogo);