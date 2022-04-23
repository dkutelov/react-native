import { FlatList } from "react-native";
import React from "react";
import { RestaurantItem } from "../../components/restaurant-item/restaurant-item";

import restaurants from "../../../assets/data/restaurants.json";
export const HomeScreen = () => {
  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};
