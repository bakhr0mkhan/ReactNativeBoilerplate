import * as React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Post} from '../screens';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Login} />
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
