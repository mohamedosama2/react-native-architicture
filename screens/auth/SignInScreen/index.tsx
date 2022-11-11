import { Box, Text } from "native-base";
import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Svg, { Defs, RadialGradient, Stop, Ellipse } from "react-native-svg";

/* interface SignInScreenProps {}
 */
const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Box
        alignSelf="center" // bg="primary.500"
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "prange.100",
          letterSpacing: "lg",
        }}
      >
        <Svg height="150" width="300">
          <Defs>
            <RadialGradient
              id="grad"
              cx="150"
              cy="75"
              rx="85"
              ry="55"
              fx="150"
              fy="75"
              gradientUnits="userSpaceOnUse"
            >
              <Stop offset="0" stopColor="#ff0" stopOpacity="1" />
              <Stop offset="1" stopColor="#83a" stopOpacity="1" />
            </RadialGradient>
          </Defs>
          <Ellipse cx="150" cy="75" rx="85" ry="55" fill="url(#grad)" />
        </Svg>
      </Box>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {},
});
