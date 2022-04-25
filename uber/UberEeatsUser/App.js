import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./src/navigation/index";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";

import config from "./src/aws-exports";
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const App = () => (
  <NavigationContainer>
    <RootNavigator />
    <StatusBar style="light" />
  </NavigationContainer>
);

export default withAuthenticator(App);
