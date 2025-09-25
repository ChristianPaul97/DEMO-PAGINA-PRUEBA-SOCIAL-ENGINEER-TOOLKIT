// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  // Puedes agregar más personalizaciones aquí
});

export default theme;
