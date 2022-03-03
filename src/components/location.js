import React from 'react';
import useStyles from '../styles/locationsStyles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { useStateValue } from '../core/StateProvider';
import CardContent from '@material-ui/core/CardContent';

import moment from 'moment';

export default function Locations() {
  const [{ location }] = useStateValue()

  const classes = useStyles();

  return (
    <Grid container spacing={3} style={{ padding: 19 }}>
      {location.map(data =>
        <Grid item xs={12} sm={6} md={4} lg={3} padding={2} key={data.id}>
          <Card className={classes.root} variant="outlined">
            <CardContent className={classes.content}>
              <div className={classes.back}></div>
              <div className={classes.title}>
                <Typography variant='h4' style={{ fontFamily: "Comic Sans MS", color: "rgb(61, 6, 112)" }}>
                  {data.name}
                </Typography>
              </div>
              <Typography className={classes.pos} variant="h5" color="textSecondary">
                {data.dimension}
              </Typography>
              <Typography className={classes.pos} variant="h4" component="p">
                {data.type}
                <br />
              </Typography>
              <Typography className={classes.pos} variant="h5" color="textSecondary">
                Residents: {data.residents.length}
              </Typography>
              <Typography className={classes.pos} variant="h5" color="textSecondary">
                Created: {moment(data.created).format('DD/MM/YYYY')}
              </Typography>
            </CardContent>

          </Card>
        </Grid>
      )}
    </Grid>
  );
}
