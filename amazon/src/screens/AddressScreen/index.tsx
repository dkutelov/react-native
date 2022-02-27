import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  Text,
  TextInput,
  Alert,
  Platform,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {styles} from './styles';
import counitryList from 'country-list';
import {Button} from '../../components/Button';

const countries = counitryList.getData();
interface Country {
  code: string;
  name: string;
}

interface FormValues {
  fullname: string;
  phoneNumber: string;
  address: string;
}

export const AddressScreen = () => {
  const [country, setCountry] = useState(countries[0].code);
  const [formValues, setFormValues] = useState<FormValues>({
    fullname: '',
    phoneNumber: '',
    address: '',
  });

  const [formErrorValues, setFormErrorValues] = useState({
    fullnameError: '',
  });

  const fullNameValid = (fullname: string) => {
    const names = fullname.split(' ');
    return names.length >= 2;
  };

  const validateAddress = () => {
    if (!fullNameValid(formValues.fullname)) {
      setFormErrorValues({
        ...formErrorValues,
        fullnameError: 'Full name should contain at least two names!',
      });
    }
  };
  const onCheckout = () => {
    // Check inline validators
    validateAddress();
    if (formErrorValues.fullnameError) {
      return;
    }

    //On Submit Validation
    if (
      !formValues.fullname ||
      !formValues.phoneNumber ||
      !formValues.address
    ) {
      Alert.alert('Please, fill in all required fields!');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
      <ScrollView style={styles.root}>
        <View style={styles.row}>
          <Text style={styles.label}>Select Your Country</Text>
          <Picker selectedValue={country} onValueChange={setCountry}>
            {countries.map((c: Country) => (
              <Picker.Item value={c.code} label={c.name} key={c.code} />
            ))}
          </Picker>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Full Name (First and Last name)</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={formValues.fullname}
            onEndEditing={validateAddress}
            onChangeText={fullname => {
              setFormValues({...formValues, fullname});
              setFormErrorValues({
                ...formErrorValues,
                fullnameError: '',
              });
            }}
          />
          {formErrorValues.fullnameError.length > 0 && (
            <Text style={styles.error}>{formErrorValues.fullnameError}</Text>
          )}
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={formValues.phoneNumber}
            onChangeText={phoneNumber => {
              setFormValues({...formValues, phoneNumber});
            }}
            keyboardType={'phone-pad'}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={formValues.phoneNumber}
            onChangeText={phoneNumber => {
              setFormValues({...formValues, phoneNumber});
            }}
            keyboardType={'phone-pad'}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={formValues.phoneNumber}
            onChangeText={phoneNumber => {
              setFormValues({...formValues, phoneNumber});
            }}
            keyboardType={'phone-pad'}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Address"
            value={formValues.address}
            onChangeText={address => {
              setFormValues({...formValues, address});
            }}
          />
        </View>
        <Button text="Check Out" onPress={onCheckout} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
