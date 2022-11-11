import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ScrollWrapper = ({ children }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default ScrollWrapper;
const styles = StyleSheet.create({
  container: { flex: 1 },
});
