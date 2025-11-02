import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3', // Blue color for primary elements
    },
    secondary: {
      main: '#F50057', // Pink color for secondary elements
    },
    background: {
      default: '#F5F5F5', // Light background color
    },
  },
  typography: {
    fontFamily: '"Comic Sans MS", "Arial", sans-serif', // Child-friendly font
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px', // Rounded button corners
        },
      },
    },
  },
});

export default theme;