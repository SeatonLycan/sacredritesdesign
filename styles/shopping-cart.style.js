import { createStyles, makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => createStyles({
    cartContainer: {
        backgroundColor: "rgba(90,90,90,.1)", 
        height: "auto",
        width: '100%',
        marginTop: "40px",
        [theme.breakpoints.down('sm')]: {
            marginTop: '0px'
        },
    },
    cartTitle: {
        fontSize: '24px',
        fontWeight: 500,
        marginTop: '40px',
        marginBottom: '20px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '0px'
        },
    },
    cartItems: {
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '50%',
        [theme.breakpoints.down('md')]: {
            width: '70%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        },
    },
    checkout: {
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        width: '50%',
        [theme.breakpoints.down('md')]: {
            width: '70%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        },
    },
    itemImage: {
        height: '150px',
        width: '150px',
        marginTop: '20px',
        marginBottom: '20px',
        [theme.breakpoints.down('xs')]: {
            height: '90px',
            width: '90px'
        },
    },
    nameAndPrice: {
        fontSize: '20px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px'
        },
    },
    checkoutButton: {
        marginBottom: '20px'
    }
}))