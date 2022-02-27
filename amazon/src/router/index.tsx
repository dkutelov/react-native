import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BottomTabNav} from './bottomTabNav';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Amazon Clone" component={BottomTabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
