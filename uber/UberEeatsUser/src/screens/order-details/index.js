import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import { BasketDishItem } from "../../components/basket-dish-item";

import orders from "../../../assets/data/orders.json";
import restaurants from "../../../assets/data/restaurants.json";

import { styles } from "./styles";
//import { useOrderContext } from "../../contexts/OrderContext";
import { useEffect, useState } from "react";
//import { useRoute } from "@react-navigation/native";

const order = orders[0];

const OrderDetailsHeader = ({ order }) => {
  return (
    <View>
      <View style={styles.page}>
        <Image source={{ uri: order.Restaurant.image }} style={styles.image} />

        <View style={styles.container}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>

          <Text style={styles.menuTitle}>Your orders</Text>
        </View>
      </View>
    </View>
  );
};

const OrderDetails = () => {
  const [order, setOrder] = useState(orders[0]);
  //const { getOrder } = useOrderContext();
  //const route = useRoute();
  //const id = route.params?.id;

  useEffect(() => {
    //getOrder(id).then(setOrder);
  }, []);

  if (!order) {
    return <ActivityIndicator size={"large"} color="gray" />;
  }

  return (
    <FlatList
      ListHeaderComponent={() => <OrderDetailsHeader order={order} />}
      data={restaurants[2].dishes}
      renderItem={({ item }) => <BasketDishItem basketDish={{ Dish: item }} />}
      keyExtractor={(item, index) => `${item.name}-${index.toString()}`}
    />
  );
};

export default OrderDetails;
