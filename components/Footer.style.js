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
        marginTop: '40px',
        marginBottom: '40px',
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    a: {
        fontSize: '12px',
        fontWeight: 400,
        fontStyle: 'normal',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        lineHeight: '1.3em',
        textDecoration: 'none',
        color: 'black'
    }
  }));