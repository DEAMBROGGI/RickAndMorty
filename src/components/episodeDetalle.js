import React, { useEffect, useState } from 'react';
import useStyles from '../styles/episodeDetalleStyle'
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStateValue } from '../core/StateProvider';
import { getEpisode, getEpisodeCharacters } from '../core/apiCall';
import Grid from '@material-ui/core/Grid';

export default function EpisodeDetalle() {
  const [{ episodeID }] = useStateValue()
  const [episodeSelected, setEpisodeSelected] = useState()
  const [episodeCharacters, setEpisodeCharacters] = useState()

  const classes = useStyles();
  useEffect(() => {
    const episodeNumber = []

    getEpisode(episodeID)
      .then(response => {
        setEpisodeSelected(response.data)
        response.data.characters.map(character =>
          episodeNumber.push(Number(character.split('/')[5])))

        getEpisodeCharacters(episodeNumber.join())
          .then(response => setEpisodeCharacters(response.data))
      })

  }, [episodeID])

  return (
    <Grid container spacing={3} style={{ padding: 19 }} >
      {episodeSelected &&

        <Grid item xs={12} sm={6} md={4} lg={3} padding={2} key={episodeSelected.id}>
          <Card className={classes.root} variant="outlined">
            <CardContent className={classes.content}>
              <div className={classes.back}></div>
              <div className={classes.title}>
                <Typography variant='h4' style={{ fontFamily: "Comic Sans MS", color: "rgb(61, 6, 112)" }}>
                  {episodeSelected.name}
                </Typography>
              </div>
              <Typography className={classes.pos} color="textSecondary">
                {episodeSelected.air_date}
              </Typography>
              <Typography className={classes.pos} variant="h4" component="p">
                {episodeSelected.episode}
                <br />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      }
      <Grid item xs={12} sm={6} md={8} lg={9} >
        <Card className={classes.characters} >
          {episodeCharacters?.map((character, index) =>
            <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
              <Box className={classes.list}>
                <Box className={classes.listImage} style={{ backgroundImage: "url(" + character.image + ")" }}></Box>
                <Box className={classes.listText}>
                  <Typography component="p" style={{ fontFamily: "Comic Sans MS", color: "rgb(61, 6, 112)", fontSize: "1rem" }}>
                    {character.name}
                    <br />
                  </Typography>
                </Box>
              </Box>
            </Grid>
          )}
        </Card>
      </Grid>
    </Grid>
  );
}
