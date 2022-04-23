import { StyleSheet, Text, View, Image } from "react-native";

export const RestaurantItem = ({
  restaurant: {
    name: title,
    image,
    deliveryFee,
    minDeliveryTime,
    maxDeliveryTime,
    rating,
  },
}) => {
  return (
    <View style={styles.restaurantContainer}>
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
            ${deliveryFee} &#8226; {minDeliveryTime}-{maxDeliveryTime} minutes
          </Text>
        </View>
        <View style={styles.rating}>
          <Text>{rating}</Text>
        </View>
      </View>
    </View>
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
