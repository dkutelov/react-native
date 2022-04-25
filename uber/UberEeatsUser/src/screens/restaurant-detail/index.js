import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import { DataStore } from "aws-amplify";

import { Restaurant, Dish } from "../../models";
import { styles } from "./styles";
import { DishListItem } from "../../components/dish-list-item";
import { RestaurantDetailHeader } from "./header";

export const RestaurantDetailScreen = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [dishes, setDishes] = useState([]);
  const { goBack } = useNavigation();
  const route = useRoute();
  const id = route.params.id;

  useEffect(() => {
    (async () => {
      setRestaurant(await DataStore.query(Restaurant, id));
      setDishes(
        await DataStore.query(Dish, (dish) => {
          dish.restaurantID("eq", id);
        })
      );
    })();
  }, []);

  if (!restaurant) {
    return <ActivityIndicator animating color="blue" />;
  }
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => (
          <RestaurantDetailHeader restaurant={restaurant} />
        )}
        data={dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item, index) => `${item.name}-${index.toString()}`}
      />
      <View style={styles.iconContainer}>
        <Ionicons
          onPress={() => goBack()}
          name="arrow-back-circle"
          size={45}
          color="white"
          style={styles.imageIcon}
        />
      </View>
    </View>
  );
};
