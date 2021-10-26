import 'react-native-gesture-handler';
import React from 'react';
import {View, Button} from 'react-native';
import {Login, Post} from '@screens';

// drawer
import {createDrawerNavigator} from '@react-navigation/drawer';

const MyDrawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Login"
        component={Login}
        // navigationOptions={{
        //   header: null,
        // }}
      />
      <Drawer.Screen name="Post" component={Post} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
