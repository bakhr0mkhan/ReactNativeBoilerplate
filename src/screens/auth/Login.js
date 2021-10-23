import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
import * as types from '@store/types';

const Login = () => {
  // hooks
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // effects
  useEffect(() => {
    dispatch({type: types.FETCH_POSTS_REQUEST});
  });
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Post')}>
        <Text>Post</Text>
        <Text>This is login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
