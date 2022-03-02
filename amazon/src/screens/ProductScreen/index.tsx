import React from 'react';
import {Text, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {styles} from './styles';

import product from '../../data/product';
import {QuantitySelector} from '../../components/SelectorQuantity';
import {Button} from '../../components/Button';
import {ImageCarousel} from '../../components/ImageCarousel';
import {useRoute, useNavigation} from '@react-navigation/native';

export const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = React.useState(
    product.options ? product.options[1] : null,
  );
  const [quantity, setQuantity] = React.useState(1);
  const route = useRoute();
  const navigation = useNavigation();

  console.warn(route.params);
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>
      <ImageCarousel images={product.images} />
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue, _) => setSelectedOption(itemValue)}>
        {product.options.map((option, i) => (
          <Picker.Item key={`${option}-${i}`} label={option} value={option} />
        ))}
      </Picker>
      <Text style={styles.price}>
        from ${product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> {product.oldPrice}</Text>
        )}
      </Text>

      <Text style={styles.description}>{product.description}</Text>

      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      <Button
        text="Add To Cart"
        onPress={() => {
          console.warn('Add to cart');
        }}
      />
      <Button
        text="Buy Now"
        onPress={() => {
          console.warn('Buy now');
        }}
        containerStyles={{backgroundColor: 'yellow'}}
      />
    </ScrollView>
  );
};
