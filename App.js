import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/Stack';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#327fa8" barStyle="dark-content" />
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
