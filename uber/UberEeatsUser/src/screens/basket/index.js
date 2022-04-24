import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import restaurants from "../../../assets/data/restaurants.json";

const restaurant = restaurants[0];

const BasketDishItem = ({ basketDish }) => (
  <View style={styles.row}>
    <View style={styles.quantityContainer}>
      <Text>1</Text>
    </View>
    <Text style={styles.name}>{basketDish.name}</Text>

    <Text style={styles.price}>${basketDish.price}</Text>
  </View>
);

export const BasketScreen = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subTitle}>Your items</Text>

      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <View style={styles.button}>
        <Text style={styles.buttonText}>Create Order</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 30,
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  quantityContainer: {
    backgroundColor: "lightgray",
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3,
  },
  price: { marginLeft: "auto" },
  name: {
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 1,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
});
