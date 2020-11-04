import { createStyles, makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'static',
      zIndex: 10,
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
    },
    containerSmall : {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'static',
      zIndex: 10,
      backgroundColor: 'black',
      [theme.breakpoints.up('md')]: {
        display: 'none'
      },
    },
    main: {
      marginTop: '15px',
    },
    menuIcon: {
      color: 'white',
      marginLeft: '15px'
    },
    headerLeftSmall: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      }
    },
    headerCenterSmall: {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      [theme.breakpoints.down('sm')]: {
        fontSize: '16px'
      },
    },
    headerRightSmall: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      }
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
      margin: '20px',
      fontFamily: 'proximaDova',
      fontFize: '12px',
      fontHeight: '400',
      fontStyle: 'normal',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      lineHeight: '1.3em',
      textAlign: 'center'
    },
    aSmall: {
      fontFamily: 'proximaDova',
      fontStyle: 'normal',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      textAlign: 'center',
      margin: 'auto',
      fontSize: '11px'
    }
  }));