import { View, StyleSheet, FlatList } from "react-native";

import { OrderListItem } from "../../components/order-list-item";
// import { useOrderContext } from "../../contexts/OrderContext";

import orders from "../../../assets/data/orders.json";

export const OrderScreen = () => {
  //   const { orders } = useOrderContext();
  //   console.log(orders);

  return (
    <View style={styles.page}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: { flex: 1, width: "100%", paddingVertical: 0 },
});
