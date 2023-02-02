import { StyleSheet } from "react-native";

import { colors, font } from "styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    borderColor: colors.LIGHT,
    borderRadius: 8,
    borderWidth: 1,
    padding: 8
  },
  image: {
    aspectRatio: 1.5,
    height: undefined,
    resizeMode: "contain",
    width: "100%"
  },
  name: {
    color: colors.BLACK,
    fontSize: font.sizes[2],
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center"
  }
});

export { styles };
