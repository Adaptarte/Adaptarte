import { StyleSheet } from "react-native";

import { colors, font } from "styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.GLAUCOUS,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
    padding: 24,
  },
  img: {
    height: 80,
    marginLeft: 24,
    resizeMode: "contain",
    width: 80,
  },
  text: {
    color: colors.WHITE,
    fontSize: font.sizes[1]
  },
  textWrapper: {
    flexBasis: 0,
    flexGrow: 1,
  },
  title: {
    color: colors.WHITE,
    fontSize: font.sizes[2],
    fontWeight: "bold",
  },
});

export { styles };
