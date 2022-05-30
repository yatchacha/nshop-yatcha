import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Main from './Main';
import './Fonts.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Main />
    </ChakraProvider>
  );
}

export default App;
