import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Button} from '../../components/Button';
import {CartProductItem} from '../../components/CartProductItem';
import {useNavigation} from '@react-navigation/native';
import products from '../../data/cart';

export const ShoppingCartScreen = () => {
  const navigation = useNavigation();
  const totalPrice = products.reduce(
    (acc, product) => acc + product.item.price * product.quantity,
    0,
  );

  const onCheckout = () => {
    navigation.navigate('AddressScreen');
  };

  return (
    <View style={styles.page}>
      {/* Will Not Scroll With Content 
        <View> 
        <Text style={{fontSize: 18}}>
          Subtotal ({products.length} items):{' '}
          <Text style={{color: 'tomato', fontWeight: 'bold'}}>
            ${totalPrice.toFixed(2)}
          </Text>
        </Text>
        <Button
          text="Proceed To Checkout"
          onPress={() => console.warn('go to checkout')}
          containerStyles={{backgroundColor: '#f7e300', borderColor: '#f7e300'}}
        />
      </View> */}
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        //   Will Scroll with content
        ListHeaderComponent={() => (
          <View>
            <Text style={{fontSize: 18}}>
              Subtotal ({products.length} items):{' '}
              <Text style={{color: 'tomato', fontWeight: 'bold'}}>
                ${totalPrice.toFixed(2)}
              </Text>
            </Text>
            <Button
              text="Proceed To Checkout"
              onPress={onCheckout}
              containerStyles={{
                backgroundColor: '#f7e300',
                borderColor: '#f7e300',
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
