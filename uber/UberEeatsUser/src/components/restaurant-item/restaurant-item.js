import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const RestaurantItem = ({
  restaurant: {
    id,
    name: title,
    image,
    deliveryFee,
    minDeliveryTime,
    maxDeliveryTime,
    rating,
  },
}) => {
  const { navigate } = useNavigation();
  const onRestaurantItemPressed = () => {
    navigate("Restaurant", {
      id,
    });
  };
  return (
    <Pressable
      onPress={onRestaurantItemPressed}
      style={styles.restaurantContainer}
    >
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>
            ${deliveryFee.toFixed(1)} &#8226; {minDeliveryTime}-
            {maxDeliveryTime} minutes
          </Text>
        </View>
        <View style={styles.rating}>
          <Text>{rating.toFixed(1)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  restaurantContainer: {
    width: "100%",
    marginVertical: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
    marginVertical: 5,
  },
  subtitle: {
    color: "gray",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: "auto",
    backgroundColor: "lightgray",
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
