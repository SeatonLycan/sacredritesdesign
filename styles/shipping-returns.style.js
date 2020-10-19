import { createStyles, makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => createStyles({
    returnContainer: {
        backgroundColor: "rgba(90,90,90,.1)", 
        height: "auto",
        display: 'flex',
        justifyContent: "center",
        marginTop: "40px",
    },
    returnPolicy : {
        textAlign: 'center',
        margin: 'auto',
        marginTop: "40px",
        marginBottom: "40px",
        width: "60%",
        fontFamily: 'proximanova',
        fontSize: '24px',
        fontWeight: 300,
        letterSpacing: '0px',
        lineHeight: '2em',
        [theme.breakpoints.down('sm')]: {
            width: "90%"
          },
    },
    returnText: {
        display: "block"
    },
    aboutContainer: {
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
    aboutParagraph: {
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
    }
}))