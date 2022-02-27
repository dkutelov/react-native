import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {ProductItem} from '../../components/ProductItem';

//Demo data
import products from '../../data/products';

export const HomeScreen = ({searchValue}: {searchValue: string}) => {
  console.log(searchValue);
  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
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
