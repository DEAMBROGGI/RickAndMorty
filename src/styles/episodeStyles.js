import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/RyM.png'

const useStyles = makeStyles({
    root: {
        height: 400,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column"
    },
    title: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        height: "50%",
        position: 'relative',
        zIndex: 1
    },
    pos: {
        padding: 12,
        marginBottom: 12,
        height: "15%",
        position: 'relative',
        zIndex: 1
    },
    content: {
        height: "80%",
        width: "100%",
        position: "relative"
    },
    actions: {
        width: "100%",
        height: "20%",
        padding: 0
    },
    back: {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: 0,
        backgroundImage: "url(" + logo + ")",
        backgroundPosition: "center",
        opacity: 0.3
    }

});
export default useStyles;