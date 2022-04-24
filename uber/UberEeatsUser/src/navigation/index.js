import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

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

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Foundation name="home" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Orders" component={OrderDetails} />
    <Tab.Screen name="Profile" component={OrderDetails} />
  </Tab.Navigator>
);

export default HomeTabs;
