import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface SignInScreenProps {}

const SignInScreen = (props: SignInScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>SignIn Screen</Text>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {}
});
