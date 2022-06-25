import { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  useEffect(() => {
    console.log("Home rendered");
  }, []);
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go To Planner"
        onPress={() => navigation.push("Planner")}
      />
    </View>
  );
}
