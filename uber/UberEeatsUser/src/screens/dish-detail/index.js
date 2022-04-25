import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import restaurants from "../../../assets/data/restaurants.json";
import { useNavigation } from "@react-navigation/native";

const dish = restaurants[0].dishes[0];

export const DishDetailScreen = () => {
  const { navigate } = useNavigation();
  const [quantity, setQuantity] = useState(1);

  const onMinusIconPressed = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const onPlusIconPressed = () => {
    setQuantity((prev) => prev + 1);
  };

  const getTotal = () => (dish.price * quantity).toFixed(2);

  return (
    <View style={styles.page}>
      <Text style={styles.title}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator} />
      <View style={styles.row}>
        <AntDesign
          onPress={onMinusIconPressed}
          name="minuscircleo"
          size={60}
          color={"black"}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          onPress={onPlusIconPressed}
          name="pluscircleo"
          size={60}
          color={"black"}
        />
      </View>
      <Pressable onPress={() => navigate("Basket")} style={styles.button}>
        <Text style={styles.buttonText}>
          Add {quantity} dish{quantity > 1 && "es"} to basket &#8226;{" "}
          {getTotal()}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "gray",
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  quantity: {
    minWidth: 30,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginHorizontal: 20,
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
