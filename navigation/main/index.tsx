import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import RegisterScreen from "../../screens/auth/RegisterScreen";
import SignInScreen from "../../screens/auth/SignInScreen";
import DetailsScreen from "../../screens/home/DetailsScreen";
import HomeScreen from "../../screens/home/HomeScreen";
import { Provider } from "react-redux";
import { DETAILS, HOME, REGISTER, SIGNIN } from "../constants";
import { store } from "../../utils/store";
import { theme } from "../../utils/NativeBaseTheme";

const NotAuthTypes = [
  { name: REGISTER, component: RegisterScreen },
  { name: SIGNIN, component: SignInScreen },
];
const AppTypes = [
  { name: HOME, component: HomeScreen },
  { name: DETAILS, component: DetailsScreen },
];
const LoginStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

const LoginContainer = (
  <NativeBaseProvider {...{ theme }}>
    <NavigationContainer>
      <Provider store={store}>
        <LoginStack.Navigator>
          {NotAuthTypes.map(({ component, name }) => (
            <LoginStack.Screen {...{ component, name }} key={name} />
          ))}
        </LoginStack.Navigator>
      </Provider>
    </NavigationContainer>
  </NativeBaseProvider>
);

const AppContainer = (
  <NativeBaseProvider {...{ theme }}>
    <NavigationContainer>
      <Provider store={store}>
        <AppStack.Navigator>
          {AppTypes.map(({ component, name }) => (
            <AppStack.Screen {...{ component, name }} key={name} />
          ))}
        </AppStack.Navigator>
      </Provider>
    </NavigationContainer>
  </NativeBaseProvider>
);

export default function MainNavigation() {
  let login = true;
  return login ? AppContainer : LoginContainer;
}
