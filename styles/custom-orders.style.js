import { createStyles, makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: "80%",
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
  },
  curtainText: {
    position: "relative",
    top: "50%",
    color: "white",
    lineHeight: '1.3em',
    fontWeight: 400,
  },
  customTitle: {
    width: "100%",
    textAlign: "center",
    marginBottom: '40px',
    marginTop: '40px',
    fontSize: '30px'
  },
  customButtons : {
      display: 'flex',
      justifyContent: 'space-evenly',
      marginBottom: '20px'
  },
  dialogImage: {
    height: '85vh',
    width: 'auto',
    [theme.breakpoints.down('md')]: {
      height: '75vh'
  },
    [theme.breakpoints.down('sm')]: {
      height: '50vh'
   },
  },
  closeIcon: {
    position: 'fixed',
    left: '95%',
    top: '5%',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      left: '90%'
   },
  },
  backArrow: {
    position: 'fixed',
    top: '50%',
    left: '5%'
  },
  forwardArrow: {
    position: 'fixed',
    top: '50%',
    right: '5%'
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
       top: '70%'
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
      top: '70%'
    },
  },
}))