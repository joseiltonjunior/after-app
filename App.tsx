import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import { Routes } from '@routes/routes';
import theme from '@theme/index';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={theme.colors.Dark_900} />

        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
