import { StyleSheet } from "react-native";

const stylesData = StyleSheet.create({
  Img: {
    width: 80,
    height: 80,
  },
  background: {
    backgroundColor: "rgb(159,164,238)",
    borderRadius: 25,
    marginLeft: "10%",
    width: 340,
    height: 118,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "55%",
  },
  content: {
    width: "80%",
  },
  title: {
    fontSize: 13,
    color: "white",
    whiteSpace: "initial",
  },
  hour: {
    color: "white",
    fontSize: 10,
  },
});

export { stylesData };
