import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, sizes, colors} from '@constants/index';

const Login = () => {
  return (
    <View>
      <Text style={styles.mainTxt}>Login {}</Text>
      <Text style={styles.secondaryTxt}>Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainTxt: {
    ...fonts.regular,
    fontSize: sizes.mfs,
    color: colors.primary,
  },
  secondaryTxt: {
    ...fonts.bold,
    fontSize: sizes.sfs,
  },
});
