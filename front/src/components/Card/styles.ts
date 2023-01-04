import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
  },
  checkBox: {
    alignSelf: "flex-end",
  },
  container: {
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    padding: 8,
  },
  img: {
    aspectRatio: 1.5,
    height: undefined,
    marginBottom: 8,
    resizeMode: "contain",
    width: "100%",
  },
});

export { styles };
