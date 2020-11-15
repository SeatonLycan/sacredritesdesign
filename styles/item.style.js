import { createStyles, makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => createStyles({
  itemPageContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: '40px',
      width: '80%',
      margin: 'auto',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        width: '100%',
    },
  },
  gridListContainer: {
    width: '500px',
    marginRight: '40px',
    [theme.breakpoints.down('sm')]: {
        width: '80%',
        order: 1,
        margin: 'auto'
    },
  },
  gridList: {
      width: '100%',
  },
  itemInfoContainer: {
    [theme.breakpoints.down('sm')]: {
        marginLeft: '10%',
        marginRight: '40px',
        marginBottom: '40px'
    },
  },
  itemName: {
    margin: '0px',
    fontWeight: 200
  },
  itemPrice: {
    fontWeight: 200
  },
  divider: {
    width: '40px',
    backgroundColor: 'black', 
    marginTop: '20px',
    height: '2px'
  },
  addToCart: {
    marginTop: '20px',
    border: "2px solid"
}
}));