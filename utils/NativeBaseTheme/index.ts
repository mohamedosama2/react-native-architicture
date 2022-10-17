import { extendTheme } from 'native-base'

export const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E'
    },
    // Redefining only one shade, rest of the color will remain same.
    amber: {
      400: '#d97706'
    }
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark'
  },

  fontConfig: {
    Roboto: {
      100: {
        normal: 'Merriweather-Black',
        italic: 'Merriweather-Black'
      },
      200: {
        normal: 'Merriweather-Black',
        italic: 'Merriweather-BlackItalic'
      },
      300: {
        normal: 'Merriweather-Black',
        italic: 'Merriweather-BlackItalic'
      }
    }
    
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
    mono: 'Roboto'
  }
})
