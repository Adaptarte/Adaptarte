import { StyleSheet } from "react-native";

const stylesData = StyleSheet.create({
  background: {
    alignItems: "center",
    backgroundColor: "rgb(159,164,238)",
    borderRadius: 25,
    display: "flex",
    flexDirection: "row",
    height: 118,
    justifyContent: "center",
    marginBottom: 20,
    marginLeft: "10%",
    width: 340,
  },
  container: {
    width: "55%",
  },
  content: {
    width: "80%",
  },
  hour: {
    color: "white",
    fontSize: 10,
  },
  img: {
    height: 80,
    width: 80,
  },
  title: {
    color: "white",
    fontSize: 13,
    whiteSpace: "initial",
  },
});

export { stylesData };
