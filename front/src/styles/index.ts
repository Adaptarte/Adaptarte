import { StyleSheet } from "react-native";

import { colors } from "./colors";

const styles =  StyleSheet.create({
  p: {
    color: colors.BLACK,
    fontSize: 18,
  },
  h: {
    color: colors.BLACK,
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
});

export { colors, styles };
