import { createStyles, makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: "80%",
    transform: 'translateZ(0)'
  },
  shopTitle: {
    width: "100%",
    textAlign: "center",
    marginBottom: '40px',
    marginTop: '40px',
    fontSize: '30px'
  },
  curtain: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    cursor: "pointer",
    fontSize: "24px",
    fontFamily: 'proximaDova',
    textAlign: "center",
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px'
    },
  },
  curtainText: {
    display: 'block',
    position: "relative",
    top: '100px',
    color: "white",
    lineHeight: '1.3em',
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
       lineHeight: '1.0em',
       fontWeight: 200,
       top: '10%'
    },
  },
  dialogViewButton: {
    position: "absolute",
    top: '50%',
    color: "white",
    lineHeight: '1.3em',
    fontWeight: 400,
    border: '3px solid',
    [theme.breakpoints.down('sm')]: {
      top: '40%',
      lineHeight: '0.75em',
      fontWeight: 200,
    },
    [theme.breakpoints.down('xs')]: {
      lineHeight: '0.6em',
      fontWeight: 200,
      fontSize: '12px'
   },
  },
  moveItemRight: {
    position: "absolute",
    top: '80%',
    right: '5%',
    color: "white",
    lineHeight: '1.3em',
    fontWeight: 400,
    border: '1.5px solid',
    [theme.breakpoints.down('sm')]: {
      top: '70%',
      height: '10px',
      width: '10px'
    },
  },
  moveItemLeft: {
    position: "absolute",
    top: '80%',
    left: '5%',
    color: "white",
    lineHeight: '1.3em',
    fontWeight: 400,
    border: '1.5px solid',
    [theme.breakpoints.down('sm')]: {
      top: '70%',
      height: '10px',
      width: '10px'
    },
  },
  dialogPaper: {
    minHeight: '80vh',
    maxHeight: '80vh',
    minWidth: '70vw',
  },
  dialogContainer: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
   },
  },
  dialogImageContainer: {
    height: '400px',
    minHeight: '400px',
    marginBottom: '10px',
    width: '400px',
    minWidth: '40%',
    position: 'relative',
    top: 0,
    left: 0,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      order: 2,
      margin: 'auto',
   },
  },
  dialogImage: {
    maxHeight: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    minWidth: '100%'
  },
  dialogItemInfoContainer: {
    marginLeft: '50px',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      marginLeft: '5%',
      order: 1,
      marginBottom: '20px'
   },
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: 'black'
  },
  divider: {
    width: '40px',
    backgroundColor: 'black', 
    marginTop: '20px',
    height: '2px'
  },
  priceAndName: {
    fontWeight: 200
  },
  viewFullItem: {
    textDecoration: 'underline',
  },
  addToCart: {
    marginBottom: '20px'
  }
}));