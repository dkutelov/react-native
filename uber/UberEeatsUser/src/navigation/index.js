import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/home";
import { BasketScreen } from "../screens/basket";
import { DishDetailScreen } from "../screens/dish-detail";
import OrderDetails from "../screens/order-details";
import { OrderScreen } from "../screens/orders";
import { RestaurantDetailScreen } from "../screens/restaurant-detail";

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Restaurant"
        component={RestaurantDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
