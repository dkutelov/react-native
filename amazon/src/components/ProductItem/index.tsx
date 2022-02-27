import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {styles} from './styles';

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
  navigation: any;
}

export const ProductItem = (props: ProductItemProps) => {
  const {item, navigation} = props;

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

  const onPress = () => {
    navigation.navigate('ProductDetails', {id: item.id});
  };

  return (
    <Pressable style={styles.root} onPress={onPress}>
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
    </Pressable>
  );
};
