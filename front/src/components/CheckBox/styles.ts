import { StyleSheet } from "react-native";

import { colors, font } from "styles";

const styles = StyleSheet.create({
  check: {
    color: colors.BLACK,
    fontSize: font.sizes[1],
    fontWeight: "bold"
  },
  container: {
    alignItems: "center",
    borderColor: colors.BLACK,
    borderRadius: 8,
    borderWidth: 2,
    display: "flex",
    height: 24,
    justifyContent: "center",
    opacity: 0.6,
    width: 24,
  },
});

export { styles };
