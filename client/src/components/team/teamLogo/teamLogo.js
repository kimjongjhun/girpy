import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2
    }
});

class TeamLogo extends Component {
    renderCrest() {
        if (this.props.team.crestUrl) {
            return (
                <Grid container item justify={'center'}>
                    <img height='200' src={this.props.team.crestUrl}/>
                </Grid>
            )
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <Grid item>
                <Paper className={classes.paper}>
                    {this.renderCrest()}
                    <Grid container item justify={'center'} xs={12}>
                        <Typography variant={'title'}>{this.props.team.name}</Typography>
                    </Grid>
                    <Grid container>
                        <Grid container item justify={'center'} xs={3}>
                            <Typography variant={'subheading'}>Address: </Typography>
                        </Grid>
                        <Grid container item justify={'left'} xs={9}>
                            <Typography variant={'body1'}>{this.props.team.address}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid container item justify={'center'} xs={3}>
                            <Typography variant={'subheading'}>Founded: </Typography>
                        </Grid>
                        <Grid container item justify={'left'} xs={9}>
                            <Typography variant={'body1'}>{this.props.team.founded}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid container item justify={'center'} xs={3}>
                            <Typography variant={'subheading'}>Colours: </Typography>
                        </Grid>
                        <Grid container item justify={'left'} xs={9}>
                            <Typography variant={'body1'}>{this.props.team.clubColors}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item justify={'center'} xs={12}>
                        <Button variant="contained" color="primary" href={this.props.team.website}>Go to Website</Button>
                    </Grid>
                </Paper>
            </Grid>
        )
    }
}

export default withStyles(styles)(TeamLogo);