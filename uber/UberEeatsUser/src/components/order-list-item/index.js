import { View, Text, Image, Pressable, StyleSheet } from "react-native";
//import { useNavigation } from "@react-navigation/native";

export const OrderListItem = ({ order }) => {
  //const navigation = useNavigation();

  return (
    <Pressable onPress={() => {}} style={styles.container}>
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />

      <View>
        <Text style={styles.restaurantName}>{order.Restaurant.name}</Text>
        <Text style={styles.itemContent}>3 items &#8226; $38.45</Text>
        <Text>2 days ago &#8226; {order.status} </Text>
      </View>
    </Pressable>
  );
};

//() => navigation.navigate("Order", { id: order.id })

const styles = StyleSheet.create({
  container: { flexDirection: "row", margin: 10, alignItems: "center" },
  image: { width: 75, height: 75, marginRight: 5 },
  restaurantName: { fontWeight: "600", fontSize: 16 },
  itemContent: { marginVertical: 5 },
});
