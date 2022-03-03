import React, { useEffect } from 'react';
import { useStyles } from '../styles/compareStyle';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { useStateValue } from '../core/StateProvider';
import CircleSharpIcon from '@mui/icons-material/CircleSharp';
import { actionTypes } from '../core/reducer';

export default function Compare() {
    const [{ compare, compareResults }, dispatch] = useStateValue()

    const compareEpisodes = []

    function sharedEpisodes() {

        compare.map(charA =>
            compare.forEach(charB => {
                if (charA.name !== charB.name) {
                    compareEpisodes.push({
                        character: charA.name,
                        sharedEpisode: {
                            comparewith: charB.name,
                            repeatEpisode: charB.episode.map(compareB =>
                                charA.episode.filter(repeat => repeat === compareB)).flat()
                        }
                    }
                    )
                }
            })
        )

        dispatch({
            type: actionTypes.COMPARE_RESULT,
            compareResults: compareEpisodes
        })
    }
    const classes = useStyles();

    function bullet(data) {
        if (data === "Alive") {
            return <span style={{ color: "green", fontSize: "20px" }}><CircleSharpIcon fontSize='small' /></span>;
        } else if (data === "Dead") {
            return <span style={{ color: "red", fontSize: "20px" }}><CircleSharpIcon fontSize='small' /></span>;
        } else { return <span style={{ color: "grey", fontSize: "20px" }}><CircleSharpIcon fontSize='small' /></span>; }
    }

    useEffect(() => {
        sharedEpisodes()
        // eslint-disable-next-line
    }, [])

    return (
        <Grid container spacing={3} style={{ padding: 19 }}>
            {compare.map(data =>

                <Grid item xs={12} sm={6} md={4} padding={2} key={data.id}>
                    <Card className={classes.root} >
                        <Box className={classes.header}  >
                            <Box className={classes.image} style={{
                                backgroundImage: "url(" + data.image + ")",
                                backgroundSize: "cover",
                                position: "relative"
                            }}>

                            </Box>
                            <Box className={classes.titleContainer}>
                                <Typography className={classes.title}>{data.name}</Typography>
                            </Box>
                        </Box>
                        <Box className={classes.content}>

                            <Typography style={{ fontSize: "25px" }} >{bullet(data.status)} {data.status} - {data.gender}</Typography>

                            <Typography variant="body1" color="textSecondary" component="p">Last known location:</Typography>
                            <Typography className={classes.data} component="p">{data.location.name}</Typography>
                            <Typography variant="body1" color="textSecondary" component="p">Was seen in the episode:</Typography>
                            <Typography className={classes.data} component="p">{data.episodeRandom}</Typography>
                            <Typography variant="body1" color="textSecondary" component="p">Episodes shared with: </Typography>
                            {compareResults?.map((char, index) =>
                                char.character === data.name &&
                                <Typography key={index} className={classes.data} component="p">
                                    {char.sharedEpisode.comparewith + " " + char.sharedEpisode.repeatEpisode.length}
                                </Typography>
                            )}
                        </Box>
                    </Card>
                </Grid>
            )}
        </Grid>
    );
}
