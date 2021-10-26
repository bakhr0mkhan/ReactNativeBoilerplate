import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
import * as types from '@store/types';
import LottieView from 'lottie-react-native';

import loadingAnim from '@assets/animations/loading.json';

const Login = ({navigation}) => {
  // hooks
  // const navigation = useNavigation();
  const dispatch = useDispatch();

  // effects
  useEffect(() => {
    dispatch({type: types.FETCH_POSTS_REQUEST});
  });
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>Post</Text>
        <Text>This is login page</Text>
        <Text
          style={{
            fontFamily: 'Lato-Bold',
            fontSize: 22,
          }}>
          Lato
        </Text>
        <Text
          style={{
            fontSize: 22,
          }}>
          Lato
        </Text>
        <LottieView source={loadingAnim} autoPlay loop />
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
