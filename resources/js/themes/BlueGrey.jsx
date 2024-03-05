import { createTheme } from '@mui/material/styles';

const CustomTheme = createTheme({
  palette: {
    primary: {
      main: '#1E8CBE', // rgb(30, 140, 190)
      contrastText: '#FBFBFB', // rgb(251, 251, 251)
    },
    secondary: {
      main: '#43B4E4', // rgb(67, 180, 228)
      contrastText: '#8A8A8F', // rgb(138, 138, 143)
    },
    text: {
      primary: '#0B0B0B', // rgb(156, 214, 238)
    },
    background: {
      default: '#f6f6f6', // rgb(251, 251, 251)
      secondary: '#9CD6EE'
    },
  },
  listItem: {
    fontFamily: '"Roboto Condensed", sans-serif',
    fontOpticalSizing: 'auto',
    fontStyle: 'normal',
  },
  typography: {
    fontFamily: '"Roboto Condensed", sans-serif',
    fontOpticalSizing: 'auto',
    fontStyle: 'normal',
    h1: {
      color: '#2A72A3',
    },
    h2: {
      color: '#2A72A3',
    },
    h3: {
      color: '#2A72A3',
    },
    h4: {
      color: '#2A72A3',
    },
    h5: {
      color: '#2A72A3',
    },
    h6: {
      color: '#2A72A3',
    },
    BrandText: {
      color: '#1E8CBE',
    },
    a: {
      color: '#1E8CBE',
      textDecoration: 'none',
    }
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#1E8CBE',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          fontFamily: '"Roboto Condensed", sans-serif',
          fontOpticalSizing: 'auto',
          fontStyle: 'normal',
          '&:hover': {
            color: '#8A8A8F',
          },
        },
      },
    },
  },
});

export default CustomTheme;
