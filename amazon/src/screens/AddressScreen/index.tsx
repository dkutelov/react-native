import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {styles} from './styles';
import counitryList from 'country-list';

const countries = counitryList.getData();
interface Country {
  code: string;
  name: string;
}

export const AddressScreen = () => {
  const [country, setCountry] = React.useState(countries[0].code);
  return (
    <View>
      <View style={styles.row}>
        <Picker selectedValue={country} onValueChange={setCountry}>
          {countries.map((c: Country) => (
            <Picker.Item value={c.code} label={c.name} key={c.code} />
          ))}
        </Picker>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Full Name (First and Last name)</Text>
        <TextInput />
      </View>
    </View>
  );
};
