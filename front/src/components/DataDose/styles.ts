import { StyleSheet } from "react-native";

import { colors } from "styles";

const stylesData = StyleSheet.create({
  background: {
    alignItems: "center",
    backgroundColor: colors.GLAUCOUS,
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
    color: colors.WHITE,
    fontSize: 10,
  },
  img: {
    height: 80,
    width: 80,
  },
  title: {
    color: colors.WHITE,
    fontSize: 13,
    whiteSpace: "initial",
  },
});

export { stylesData };
