import { createStyles, makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => createStyles({
    cartContainer: {
        backgroundColor: "rgba(90,90,90,.1)",
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
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
    },
    cartItems: {
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
        justifyContent: 'space-evenly',
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        },
    },
    checkout: {
        padding: '20px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        width: '65%',
        [theme.breakpoints.down('sm')]: {
            width: '85%'
        },
    },
    itemImage: {
        height: '200px',
        width: '200px',
        marginTop: '20px',
        marginBottom: '20px',
        marginRight: '40px',
        [theme.breakpoints.down('xs')]: {
            height: '90px',
            width: '90px'
        },
    },
    itemName: {
        fontSize: '20px',
        width: '20%',
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px'
        },
    },
    price: {
        fontSize: '20px',
        width: '20%',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px'
        },
    },
    checkoutButton: {
        marginBottom: '20px'
    },
    noItems: {
        fontSize: '24px',
    },
    purchaseInfo: {
        width: '60%',
        margin: 'auto',
        marginBottom: '40px',
        fontSize: '16px',
        [theme.breakpoints.down('sm')]: {
            width: '80%'
        },
    },
    purchasedMessage: {
        textAlign: 'center',
        fontSize: '24px',
        marginTop: '40px',
        marginBottom: '40px'
    },
    deleteButton: {
        color: 'black',
    },
    totals: {
        fontWeight: 200,
        lineHeight: '10px'
    }
}))