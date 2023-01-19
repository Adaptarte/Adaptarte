import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  switch: {
    position: "relative",
    zIndex: 1,
  },
  switchContainer: {
    borderRadius: 20,
    borderWidth: 3,
    position: "relative",
    transform: [{ scale:0.5 }],
    zIndex: 0,
  },
});

export { styles };
