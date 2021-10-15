import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';

import {
  useFonts,
  Exo2_300Light,
  Exo2_400Regular,
  Exo2_500Medium,
  Exo2_700Bold,
} from '@expo-google-fonts/exo-2';

import theme from './src/global/styles/theme';
import { Home } from './src/screens/Home';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Exo2_300Light,
    Exo2_400Regular,
    Exo2_500Medium,
    Exo2_700Bold,
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="default"
      />

      <Home />
    </ThemeProvider>
  );
}