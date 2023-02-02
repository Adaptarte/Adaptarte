import { StyleSheet } from "react-native";

import { colors, font } from "styles";

const styles = StyleSheet.create({
  arrow: {
    color: colors.WHITE,
    fontSize: font.sizes[3],
    fontWeight: "900"
  },
  arrowContainer: {
    marginBottom: "auto",
    marginTop: "auto",
    paddingLeft: 5,
    paddingRight: 5
  },
  ball: {
    backgroundColor: "grey",
    borderRadius: 200,
    height: 5,
    margin: 2,
    opacity: 0.5,
    width: 5
  },
  cardContainer: {
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    padding: 10
  },
  currentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 5
  }
});

export { styles };
