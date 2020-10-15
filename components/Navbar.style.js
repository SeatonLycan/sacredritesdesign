import { createStyles, makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'static',
      zIndex: 10,
    },
    main: {
      marginTop: '15px',
    },
    logo: {
      height: "80px",
      width: "80px",
      marginTop: "15px",
    },
    header: {
    fontFamily: "Sorts Mill Goudy",
    fontSize: "17px",
    fontWeight: 400,
    fontStyle: 'normal',
    textTransform: 'none',
    letterSpacing: ".31px",
    lineHeight: "1.6em"
    },
    a : {
    color: 'black',
    textDecoration: 'none',
    margin: '10px',
    fontFamily: 'proximaDova',
    fontFize: '12px',
    fontHeight: '400',
    fontStyle: 'normal',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    lineHeight: '1.3em',
    }
  }));