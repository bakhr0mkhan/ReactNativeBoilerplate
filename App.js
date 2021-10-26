import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/Stack';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#327fa8" barStyle="dark-content" />
      <StackNavigator />
      {/* <Drawer.Navigator>
        <Drawer.Screen name="Feed" component={HomeScreen} />
        <Drawer.Screen name="Article" component={NotificationsScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
