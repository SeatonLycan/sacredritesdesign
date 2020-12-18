import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import "typeface-sorts-mill-goudy"

export default responsiveFontSizes((createMuiTheme)({
    typography: {
      fontFamily: [
        'Sorts Mill Goudy',
        'serif',
      ].join(','),
      button: {
        textTransform: 'none',
      },
      fontWeight: 400
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