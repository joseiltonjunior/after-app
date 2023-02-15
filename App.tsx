import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { Routes } from '@routes/routes';
import theme from '@theme/index';
import store from '@storage/index';

import '@config/ReactotronConfig';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor={theme.colors.Dark_900} />

          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}

const OverlayApp = console.tron.overlay(App);

export default App;
