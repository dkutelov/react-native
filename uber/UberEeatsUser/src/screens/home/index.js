import { View, StyleSheet, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { RestaurantItem } from "../../components/restaurant-item/restaurant-item";
import { DataStore } from "aws-amplify";
import { Restaurant } from "../../models";

export const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState();

  useEffect(() => {
    (async () => {
      setRestaurants(await DataStore.query(Restaurant));
    })();
  }, []);

  return (
    <View style={styles.page}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
    paddingTop: 0,
  },
});
