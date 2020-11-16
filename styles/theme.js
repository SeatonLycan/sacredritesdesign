import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export default responsiveFontSizes((createMuiTheme)({
    typography: {
        fontFamily: 'Proxima Nova',
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
        MuiCssBaseline: {
          '@global': {
            a: {
              textDecoration: 'none',
              color: 'black'
            },
            h2: {
              fontWeight: 200,
              fontSize: '14px',
              lineHeight: '30px'
            },
          },
        },
        MuiButton: {
          root: {
            borderRadius: 3,
          }
        },
        MuiDialogContent: {
          root: {
            padding: '10px',
            marginLeft: '10px'
          }
        },
        MuiMenuItem: {
          root: {
            minHeight: 'none',
            height: '48px'
          }
        }
      }
}))