import React from 'react';
import useStyles from '../styles/episodeStyles'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStateValue } from '../core/StateProvider';
import Grid from '@material-ui/core/Grid';
import { actionTypes } from '../core/reducer';

export default function Episode() {
  const [{ episode }, dispatch] = useStateValue()
  const classes = useStyles();

  function openDetalle(id) {

    dispatch({
      type: actionTypes.EPISODEID,
      episodeID: id
    });
    dispatch({
      type: actionTypes.TYPE,
      typeData: "detail"
    })


  }

  return (
    <Grid container spacing={3} style={{ padding: 19 }}>
      {episode.map(data =>
        <Grid item xs={12} sm={6} md={4} lg={3} padding={2} key={data.id}>
          <Card className={classes.root} variant="outlined">
            <CardContent className={classes.content}>
              <div className={classes.back}></div>
              <div className={classes.title}>
                <Typography variant='h4' style={{ fontFamily: "Comic Sans MS", color: "rgb(61, 6, 112)" }}>
                  {data.name}
                </Typography>
              </div>
              <Typography className={classes.pos} color="textSecondary">
                {data.air_date}
              </Typography>
              <Typography className={classes.pos} variant="h4" component="p">
                {data.episode}
                <br />
              </Typography>
            </CardContent>
            <CardActions className={classes.actions}>
              <Button style={{
                backgroundColor: "blueviolet",
                width: "100%",
                height: "100%",
                color: "white",
                fontSize: 30
              }}
                onClick={() => openDetalle(data.id)}
              >+INFO</Button>
            </CardActions>
          </Card>
        </Grid>
      )}
    </Grid>
  );
}
