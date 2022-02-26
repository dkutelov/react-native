import React from 'react';
import {View, Image, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {QuantitySelector} from '../SelectorQuantity';
import {styles} from './styles';

interface CartProductItemProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    };
  };
}

export const CartProductItem = ({cartItem}: CartProductItemProps) => {
  const {quantity: quantityProp, item} = cartItem;
  const [quantity, setQuantity] = React.useState(quantityProp);

  const getStarType = (index: number): string => {
    const roundedAvgRating = Math.floor(item.avgRating);
    if (index < roundedAvgRating) {
      return 'star';
    } else if (
      index === roundedAvgRating &&
      item.avgRating - roundedAvgRating > 0
    ) {
      return 'star-half-full';
    }
    return 'star-o';
  };

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          <View style={styles.ratingsContainer}>
            {Array.from({length: 5}).map((_, index) => (
              <FontAwesome
                key={`${item.id}-${index}`}
                style={styles.star}
                name={getStarType(index)}
                size={18}
                color={'#e47911'}
              />
            ))}
            <Text>{item.ratings}</Text>
          </View>
          <Text style={styles.price}>
            from ${item.price}
            {item.oldPrice && (
              <Text style={styles.oldPrice}> {item.oldPrice}</Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>
    </View>
  );
};
