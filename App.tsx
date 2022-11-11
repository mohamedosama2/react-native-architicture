import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainNavigation from "./navigation/main";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";

SplashScreen.preventAutoHideAsync();

function App() {
  const [fontsLoaded] = useFonts({
    "Merriweather-Black": require("./assets/fonts/Merriweather-Black.ttf"),
    "Merriweather-BlackItalic": require("./assets/fonts/Merriweather-BlackItalic.ttf"),
    "Merriweather-Bold": require("./assets/fonts/Merriweather-Bold.ttf"),
    "Merriweather-BoldItalic": require("./assets/fonts/Merriweather-BoldItalic.ttf"),
    "Merriweather-Italic": require("./assets/fonts/Merriweather-Italic.ttf"),
    "Merriweather-Light": require("./assets/fonts/Merriweather-Light.ttf"),
    "Merriweather-LightItalic": require("./assets/fonts/Merriweather-LightItalic.ttf"),
    "Merriweather-Regular": require("./assets/fonts/Merriweather-Regular.ttf"),
  });

  const onLayoutRootView = async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }

    if (!fontsLoaded) {
      return null;
    }
  };
  
  useEffect(() => {
    onLayoutRootView();
  }, [fontsLoaded]);
  return <MainNavigation />;
}

export default App;
