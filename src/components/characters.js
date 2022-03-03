import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { actionTypes } from '../core/reducer';
import { useStateValue } from '../core/StateProvider';
import CircleSharpIcon from '@mui/icons-material/CircleSharp';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useStyles } from '../styles/characterStyle';

export default function Character() {
  const [{ character, compare }, dispatch] = useStateValue()

  const classes = useStyles();

  function bullet(data) {
    if (data === "Alive") {
      return <span style={{ color: "green", fontSize: "20px" }}><CircleSharpIcon fontSize='small' /></span>;
    } else if (data === "Dead") {
      return <span style={{ color: "red", fontSize: "20px" }}><CircleSharpIcon fontSize='small' /></span>;
    } else { return <span style={{ color: "grey", fontSize: "20px" }}><CircleSharpIcon fontSize='small' /></span>; }
  }

  function compareCharacter(data, event) {
    var selected = event.currentTarget

    if (selected.classList.contains("removeBtn")) {
      var removeChar = compare.filter(char => char.id !== data.id)
      selected.classList.remove("removeBtn")
      selected.textContent = "COMPARE CHARACTER"

      dispatch({
        type: actionTypes.COMPARE,
        compare: removeChar
      })
    } else if (compare.length < 3) {
      var addChar = compare
      addChar.push(data)
      selected.classList.add("removeBtn")
      selected.textContent = "NOT COMPARE CHARACTER"
      dispatch({
        type: actionTypes.COMPARE,
        compare: addChar
      })
    }
    else {
      dispatch({
        type: actionTypes.SNACKBAR,
        snackbar: {
          view: true,
          message: "You can compare more than 3 characters",
          success: false
        },
      });
    }
  }
  useEffect(() => {

    compare.map(char =>
      document.querySelectorAll(`button[id="btnCompare${char.id}"]`)
        .forEach(btn => {
          btn.classList.add("removeBtn")
          btn.textContent = "NOT COMPARE CHARACTER"

        })
    )
    // eslint-disable-next-line
  }, [])


  return (
    <Grid container spacing={3} style={{ padding: 19 }}>
      {character.map(data =>

        <Grid item xs={12} md={6} padding={2} key={data.id}>
          <Card className={classes.root} >
            <Box className={classes.image} style={{
              backgroundImage: "url(" + data.image + ")",
              backgroundSize: "cover",
              position: "relative"
            }}>
              <CardActions className={classes.actions}>
                <Button onClick={(e) => { compareCharacter(data, e) }}
                  name="compareBtn"
                  id={"btnCompare" + data.id}
                  style={{
                    backgroundColor: "blueviolet",
                    width: "100%",
                    height: "15%",
                    color: "white",
                    position: "absolute",
                    bottom: 0,
                    fontFamily: "Comic Sans MS",
                    fontSize: "0.8em"
                  }}>Compare characters</Button>
              </CardActions>
            </Box>
            <Box className={classes.content}>
              <Typography className={classes.title}>{data.name}</Typography>

              <Typography style={{ fontSize: "25px" }} >{bullet(data.status)} {data.status} - {data.gender}</Typography>

              <Typography variant="body1" color="textSecondary" component="p">Last known location:</Typography>
              <Typography className={classes.data} component="p">{data.location.name}</Typography>
              <Typography variant="body1" color="textSecondary" component="p">Zas seen in the episode:</Typography>
              <Typography className={classes.data} component="p">{data.episodeRandom}

              </Typography>
            </Box>
          </Card>
        </Grid>
      )}
    </Grid>
  );
}
