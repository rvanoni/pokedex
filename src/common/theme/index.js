import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import red from '@mui/material/colors/red'

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: `'Open Sans', sans-serif;`,
    },
    palette: {
      primary: {
        50: '#e0e7eb',
        100: '#b3c4ce',
        200: '#809dae',
        300: '#4d768d',
        400: '#265874',
        500: '#003b5c',
        600: '#003554',
        700: '#002d4a',
        800: '#002641',
        900: '#001930',
        A100: '#69a4ff',
        A200: '#3685ff',
        A400: '#0366ff',
        A700: '#005be8',
        contrastDefaultColor: 'light',
        main: '#003b5c',
      },
      secondary: {
        50: '#ecf9f9',
        100: '#d1f0ef',
        200: '#b2e6e4',
        300: '#93dbd9',
        400: '#7bd4d1',
        500: '#64ccc9',
        600: '#5cc7c3',
        700: '#52c0bc',
        800: '#48b9b5',
        900: '#36ada9',
        A100: '#f8ffff',
        A200: '#c5fffd',
        A400: '#92fffb',
        A700: '#79fffa',
        contrastDefaultColor: 'dark',
        main: '#64ccc9',
      },
    },
    danger: {
      color: red[500],
    },
  })
)

export default theme
