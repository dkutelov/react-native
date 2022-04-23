import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import restaurants from "../../../assets/data/restaurants.json";
import { DishListItem } from "../../components/dish-list-item";

const restaurant = restaurants[0];

export const RestaurantDetailScreen = () => {
  return (
    <View style={styles.page}>
      <Image
        source={{ uri: restaurant.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.iconContainer}>
        <Ionicons
          name="arrow-back-circle"
          size={45}
          color="white"
          style={styles.imageIcon}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} minutes
        </Text>
      </View>
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: { margin: 10 },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 5,
  },
  subtitle: {
    color: "#525552",
    fontSize: 15,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 15,
  },
});
