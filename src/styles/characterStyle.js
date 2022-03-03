import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: "flex",
    flexDirection: 'row',
    height: 250
  },
  image: {
    width: "40%",
  },
  content: {
    width: '60%',
    padding: "8px"
  },
  title: {
    width: "100%",
    fontSize: "30px",
    color: "blueviolet",
    textAlign: "center",
    fontFamily: "Comic Sans MS"
  },
  data: {
    fontSize: "20px",
    paddingBottom: "8px"
  },
  actions: {
    padding: 0
  }

}));