import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

let pastFixtures = [];
let futureFixtures = [];

const styles = theme => ({
    gridItem: {
        flexGrow: 1,
        padding: theme.spacing.unit
    }
});

// const sortFixtures = (fixtures) => {
//     if (fixtures) {
//         fixtures.map((fixture) => {
//             if (fixture.status === 'FINISHED') {
//                 console.log('finished push', fixture);
//                 pastFixtures.push(fixture);
//             } else if (fixture.status === 'SCHEDULED') {
//                 futureFixtures.push(fixture);
//             } else {
//                 console.log('Unhandled fixture type ... ', fixture.status);
//             }
//         })
//     } else {
//         console.log('No fixture info')
//     }
// };

class TeamFixtures extends Component {
    render() {
        const {classes} = this.props;

        return (
            <Grid item>
                <Grid container item justify={'center'}>
                    <Paper className={classes.gridItem}>
                        <h1 onClick={() => console.log('fixtures hit', this.props)}>team fixtures</h1>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(TeamFixtures);