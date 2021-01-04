import { createStyles, makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => createStyles({
    infoContainer: {
        backgroundColor: "rgba(90,90,90,.1)",
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: "40px",
        [theme.breakpoints.down('sm')]: {
            marginTop: '0px'
        },
    },
    contact: {
        margin: 'auto',
        fontSize: '24px',
        fontWeight: 500,
        marginTop: '40px',
        marginBottom: '20px'
    },
    info: {
        margin: 'auto',
        fontSize: '14px',
        fontWeight: 300,
        marginBottom: '40px'
    },
    containerContainer: {
        backgroundColor: "rgba(90,90,90,.1)",
    },
    contactFormContainer: {
        width: '70%',
        margin: 'auto',
        padding: '20px',
        [theme.breakpoints.down('sm')]: {
            width: '95%'
        },
    },
    responseContainer: {
        height: '100px',
        textAlign: 'center',
    },
    responseParagraph: {
        marginTop: "0px",
        marginBottom: "40px",
        lineHeight: "2em",
    },
    responseSpan: {
        position: 'relative',
        top: '20px'
    }
}))