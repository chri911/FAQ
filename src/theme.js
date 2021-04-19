import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: purple[500],
  //   },
  //   secondary: {
  //     main: green[500],
  //   },
  // },
  typography: {
    fontFamily: 'Inter',
    fontSize: '16px',
    lineHeight: '150%',
    color: '#000',
    button: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: 1.5,
      opacity: 0.5,
      textTransform: "none"
    },
    h1: {
      fontWeight: 800,
      fontSize: "80px",
      textAlign: "center"
    }
  },
});
