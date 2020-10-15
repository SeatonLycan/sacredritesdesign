import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export default responsiveFontSizes((createMuiTheme)({
    typography: {
        fontFamily: 'Sorts Mill Goudy',
        button: {
          textTransform: 'none',
        },
      },
    shape: {
      borderRadius: 10,
    },
    palette: {
      primary: {
        main: '#000'
      },
      secondary: {
        main: '#444'
      },
      type: 'light',
      },
      a : {
        color: 'black',
        textDecoration: 'none',
        margin: '5px',
        fontFamily: 'proximaDova',
        fontFize: '12px',
        fontHeight: '400',
        fontStyle: 'normal',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        lineHeight: '1.3em',
      },
      overrides: {
        MuiButton: {
          root: {
            borderRadius: 3,
          }
        }
      }
}))