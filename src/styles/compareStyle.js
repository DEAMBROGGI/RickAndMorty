import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {

        width: '100%',
        display: "flex",
        flexDirection: 'column',
        height: 500

    },
    header: {
        height: "40%",
        width: "100%",
        display: "flex",
        flexDirection: "row"
    },
    image: {
        width: "100%",
        height: "100%"
    },
    content: {
        width: '100%',
        height: "60%",
        padding: "8px"
    },
    titleContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
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