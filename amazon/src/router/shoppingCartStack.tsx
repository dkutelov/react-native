import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ShoppingCartScreen} from '../screens/ShoppingCartScreen';
import {AddressScreen} from '../screens/AddressScreen';

const Stack = createNativeStackNavigator();

export const ShoppingCartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ShoppingCartScreen"
        component={ShoppingCartScreen}
        options={{title: 'Shopping Cart'}}
      />
      <Stack.Screen name="AddressScreen" component={AddressScreen} />
    </Stack.Navigator>
  );
};
