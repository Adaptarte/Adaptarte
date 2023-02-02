import { StyleSheet } from "react-native";

import { colors, font } from "styles";

const styles = StyleSheet.create({
  description: {
    color: colors.BLACK,
    fontSize: font.sizes[2],
    marginBottom: 16
  },
  title: {
    color: colors.GLAUCOUS,
    fontSize: font.sizes[3],
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 32
  }
});

export { styles };
