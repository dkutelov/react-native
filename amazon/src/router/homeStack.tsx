import React, {Dispatch, SetStateAction} from 'react';
import {SafeAreaView, View, TextInput, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';

import {HomeScreen} from '../screens/HomeScreen';
import {ProductScreen} from '../screens/ProductScreen';

const Stack = createNativeStackNavigator();

interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.headerContainer}>
        <Feather name="search" size={20} />
        <TextInput
          style={styles.textInput}
          placeholder="Search..."
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  );
};

export const HomeStack = () => {
  const [searchValue, setSearchValue] = React.useState<string>('');

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        options={{
          title: 'Home',
          header: () => (
            <HeaderComponent
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          ),
        }}>
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen name="ProductDetails" component={ProductScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#22e3dd',
  },
  headerContainer: {
    margin: 10,
    padding: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    marginLeft: 10,
  },
});

// Can add to Stack.Navigator if needs to be on both stack screens
//  screenOptions={{
//       header: () => (
//         <HeaderComponent
//           searchValue={searchValue}
//           setSearchValue={setSearchValue}
//         />
//       ),
//     }}
