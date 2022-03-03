import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/RyMDos.jpg'

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
        height: "45%",
        position: 'relative',
        zIndex: 1

    },
    pos: {
        height: "15%",
        position: 'relative',
        zIndex: 1,
        marginTop: 5
    },
    content: {
        height: "100%",
        width: "100%",
        position: "relative"


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
        backgroundSize: "cover",
        opacity: 0.3
    }

})
export default useStyles