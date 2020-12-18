import { createStyles, makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: "90%",
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
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
    width: '100%',
    height: 'auto',
  },
  closeIcon: {
    color: 'white',
    position: 'absolute',
    left: '92.5%',
    top: 25,
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      left: '90%'
   },
  },
  backArrow: {
    position: 'absolute',
    top: '40%',
    left: 0,
    color: 'white',
  },
  forwardArrow: {
    position: 'absolute',
    top: '40%',
    right: 0,
    color: 'white'
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
      top: '70%'
    },
    [theme.breakpoints.down('xs')]: {
      border: 'none'
    },
  },
}))