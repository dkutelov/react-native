import React from "react";
import { View, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import restaurants from "../../../assets/data/restaurants.json";
import { DishListItem } from "../../components/dish-list-item";
import { RestaurantDetailHeader } from "./header";

const restaurant = restaurants[1];

export const RestaurantDetailScreen = () => {
  const { goBack } = useNavigation();
  const route = useRoute();
  const id = route.params.id;
  console.log({ id });
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => (
          <RestaurantDetailHeader restaurant={restaurant} />
        )}
        data={restaurant.dishes}
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
