import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          display: `flex`,
          justifyContent: `center`,
          height: `100vh`,
          width: `100%`,
          background: `rgba(0, 0, 0, 0.15)`,
        },
      },
    },
  },
  typography: {
    fontFamily: ['Ubuntu'].join(','),
  },
});

export default theme;
