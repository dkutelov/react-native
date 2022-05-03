import { Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import React, { useState } from "react";
import { Auth, DataStore } from "aws-amplify";
import { SafeAreaView } from "react-native-safe-area-context";
import { User } from "../../models";
import { useAuthContext } from "../../context/auth.context";
import { useNavigation } from "@react-navigation/native";

export const ProfileScreen = () => {
  const { sub, setDbUser, dbUser } = useAuthContext();
  const { goBack } = useNavigation();
  const [name, setName] = useState(dbUser?.name || "");
  const [address, setAddress] = useState(dbUser?.address || "");
  const [lat, setLat] = useState(String(dbUser?.lat || "0"));
  const [lng, setLng] = useState(String(dbUser?.lng || "0"));

  const createUser = async () => {
    try {
      const user = await DataStore.save(
        new User({
          name,
          address,
          lat: parseFloat(lat),
          lng: parseFloat(lng),
          sub,
        })
      );
      setDbUser(user);
      goBack();
    } catch (error) {
      Alert.alert("Error:", error.message);
    }
  };

  const updateUser = async () => {
    const user = await DataStore.save(
      //User model is immutable
      User.copyOf(dbUser, (updated) => {
        updated.name = name;
        updated.address = address;
        updated.lat = parseFloat(lat);
        updated.lng = parseFloat(lng);
      })
    );
    setDbUser(user);
  };

  const onSave = async () => {
    if (dbUser) {
      console.log("ho");
      await updateUser();
    } else {
      console.log("mo");
      await createUser();
    }
  };

  return (
    <SafeAreaView>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
        style={styles.input}
      />
      <TextInput
        value={lat}
        onChangeText={setLat}
        placeholder="Latitude"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        value={lng}
        onChangeText={setLng}
        placeholder="Longitude"
        style={styles.input}
      />
      <Button onPress={onSave} title="Save" />
      <Text
        onPress={() => Auth.signOut()}
        style={{ textAlign: "center", color: "red", margin: 10 }}
      >
        Sign out
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
  },
});
