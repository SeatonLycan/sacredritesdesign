import { createStyles, makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: "90%",
    transform: 'translateZ(0)',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
  },
  shopTitle: {
    width: "100%",
    textAlign: "center",
    marginBottom: '40px',
    marginTop: '40px',
    fontSize: '30px',
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
    top: '20%',
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
    border: '1px solid',
    padding: '5px',
    borderRadius: '5px',
    [theme.breakpoints.down('sm')]: {
      top: '40%',
      fontWeight: 200,
    },
    [theme.breakpoints.down('xs')]: {
      lineHeight: '1.0em',
      fontWeight: 200,
      fontSize: '12px',
      width: '50%'
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
      width: '10px',
    },
    [theme.breakpoints.down('xs')]: {
      border: 'none'
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
      width: '10px',
    },
    [theme.breakpoints.down('xs')]: {
      border: 'none'
    },
  },
  dialogPaper: {
    minHeight: '60vh',
    maxHeight: '60vh',
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
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      order: 2,
      width: '100%'
   },
  },
  dialogImage: {
    width: '100%'
  },
  dialogItemInfoContainer: {
    position: 'absolute',
    left: '50%',
    marginLeft: '20px',
    marginRight: '20px',
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      left: 0,
      marginLeft: 0,
      marginBottom: '20px',
      order: 1,
      width: '100%'
   },
  },
  closeIcon: {
    color: 'black',
    position: 'absolute',
    top: -5,
    right: -40,
    [theme.breakpoints.down('sm')]: {
      right: -5,
      top: -2.5
   },
  },
  divider: {
    width: '40px',
    backgroundColor: 'black', 
    marginTop: '5px',
    height: '2px'
  },
  name: {
    fontWeight: 200,
    marginTop: '0px',
    width: '90%'
  },
  price: {
    fontWeight: 200,
    marginTop: '5px'
  },
  viewFullItem: {
    textDecoration: 'underline',
  },
  addToCart: {
    marginBottom: '20px'
  },
}));