import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { DishDetailScreen } from "./src/screens/dish-detail-screen";

import { HomeScreen } from "./src/screens/home-screen";
import { RestaurantDetailScreen } from "./src/screens/restaurant-detail-screen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailScreen /> */}
      <DishDetailScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
