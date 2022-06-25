import { useEffect } from "react";
import { Text, View, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function PlannerScreen({ navigation }: NativeStackHeaderProps) {
  useEffect(() => {
    console.log("Planner rendered");
  }, []);
  return (
    <View>
      <Text>Planner Screen</Text>
      <Button
        title="Go To Planner"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
