import React from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {styles} from './styles';

import product from '../../data/product';

export const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = React.useState(
    product.options ? product.options[1] : null,
  );
  return (
    <View>
      <Text style={styles.title}>{product.title}</Text>

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
    </View>
  );
};
