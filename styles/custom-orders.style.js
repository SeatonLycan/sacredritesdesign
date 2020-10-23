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
    objectFit: 'cover',
    height: '100vh',
    width: 'auto',
    [theme.breakpoints.down('sm')]: {
      height: '60vh'
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
  }
}));