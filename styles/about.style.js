import { createStyles, makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => createStyles({
    quoteContainer: {
        backgroundColor: "rgba(90,90,90,.1)", 
        height: "auto",
        width: '100%',
        display: 'flex',
        justifyContent: "center",
        marginTop: "50px",
    },
    quote : {
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
    quoteText: {
        display: "block"
    },
    quoteAuthor: {
        fontSize: "18px",
        width: "60%",
    },
    aboutContainer: {
        backgroundColor: "rgba(90,90,90,.1)", 
        height: "auto",
        display: 'flex',
        justifyContent: "space-evenly",
        flexWrap: 'wrap',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            justifyContent: "center",
          },
    },
    aboutParagraph: {
        width: "20%",
        marginTop: "0px",
        marginBottom: "40px",
        lineHeight: "2em",
        [theme.breakpoints.down('sm')]: {
            width: "80%",
            margin: 'auto',
            marginBottom: "30px",
            marginTop: "30px"
        },
    },
    artist: {
        marginLeft: '10%',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10%',
            width: '40%'
        },
    }
}))