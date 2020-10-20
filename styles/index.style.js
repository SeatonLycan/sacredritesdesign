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
       lineHeight: '0.75em',
       fontWeight: 200,
       top: '50px'
    },
  },
  quickView: {
    position: "relative",
    top: '130px',
    color: "white",
    lineHeight: '1.3em',
    fontWeight: 400,
    border: '3px solid',
    [theme.breakpoints.down('sm')]: {
       lineHeight: '0.75em',
       fontWeight: 200,
       top: '80px'
    },
  },
  dialogContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '80vh',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
   },
  },
  dialogImage: {
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      margin: 'auto',
      order: 2
   },
  },
  dialogItemInfoContainer: {
    marginLeft: '10px',
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      marginLeft: '5%',
      order: 1,
      marginBottom: '20px'
   },
  },
  closeIcon: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: '95%'
   },
  },
  divider: {
    width: '40px',
    backgroundColor: 'black', 
    marginTop: '20px',
    height: '2px'
  },
}));