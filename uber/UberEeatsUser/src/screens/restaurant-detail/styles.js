import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 15,
  },
  container: { margin: 10 },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 5,
  },
  subtitle: {
    color: "#525552",
    fontSize: 15,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  menuTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 0.7,
  },
});
