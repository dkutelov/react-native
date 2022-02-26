import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {ProductItem} from '../../components/ProductItem';

//Demo data
import products from '../../data/products';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={ProductItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default HomeScreen;
