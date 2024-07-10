import { extendTheme } from 'native-base';

const customTheme = extendTheme({
  colors: {
    primary: {
      50: '#e3f2f9',
      100: '#c8e0f4',
      200: '#a6cced',
      300: '#7db1e3',
      400: '#4d94d4',
      500: '#0077b6',
      600: '#00629b',
      700: '#004578',
      800: '#002a55',
      900: '#001233',
    },
  },
  components: {
    Button: {
      baseStyle: {
        rounded: 'md',
        color: 'white',
      },
      defaultProps: {
        _text: {
          color: 'white',
          fontWeight: 'bold',
        },
      },
    },
    Input: {
      baseStyle: {
        borderRadius: 'md',
        borderColor: 'coolGray.300',
        _focus: {
          borderColor: 'primary.500',
        },
      },
    },
    Text: {
      baseStyle: {
        color: 'coolGray.800',
      },
    },
  },
  fontConfig: {
    Roboto: {
      100: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      200: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      300: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      400: {
        normal: 'Roboto-Regular',
        italic: 'Roboto-Italic',
      },
      500: {
        normal: 'Roboto-Medium',
      },
      600: {
        normal: 'Roboto-Medium',
        italic: 'Roboto-MediumItalic',
      },
      700: {
        normal: 'Roboto-Bold',
      },
      800: {
        normal: 'Roboto-Bold',
        italic: 'Roboto-BoldItalic',
      },
      900: {
        normal: 'Roboto-Black',
        italic: 'Roboto-BlackItalic',
      },
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
    mono: 'Roboto',
  },
  config: {
    initialColorMode: 'light',
  },
});

export default customTheme;
