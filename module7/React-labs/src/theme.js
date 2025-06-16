import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#f50057',
      },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    },
});

export default theme;