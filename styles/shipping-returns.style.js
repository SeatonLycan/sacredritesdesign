import { createStyles, makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => createStyles({
    returnContainer: {
        backgroundColor: "rgba(90,90,90,.1)", 
        height: "auto",
        display: 'flex',
        justifyContent: "center",
        marginTop: "40px",
        [theme.breakpoints.down('sm')]: {
            marginTop: '0px'
        },
    },
    returnPolicy : {
        textAlign: 'center',
        margin: 'auto',
        marginTop: "40px",
        marginBottom: "40px",
        width: "60%",
        fontSize: '24px',
        fontWeight: 300,
        letterSpacing: '0px',
        lineHeight: '2em',
    },
    returnText: {
        display: "block"
    },
    infoContainer: {
        backgroundColor: "rgba(90,90,90,.1)", 
        height: "auto",
        display: 'flex',
        justifyContent: "space-evenly",
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            justifyContent: "center",
          },
    },
    infoParagraph: {
        width: "20%",
        marginTop: "40px",
        marginBottom: "40px",
        lineHeight: "2em",
        [theme.breakpoints.down('sm')]: {
            width: "80%",
            margin: 'auto',
            marginBottom: "30px",
            marginTop: "30px"
        },
    },
    spanTitle: {
        display: 'block',
        fontSize: '24px',
        marginBottom: '20px'
    },
    returnMessage: {
        fontSize: '16px',
        lineHeight: '0.5em'
    }
}))