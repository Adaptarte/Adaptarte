import { StyleSheet } from "react-native";

import { colors } from "./colors";

const styles =  StyleSheet.create({
  h: {
    color: colors.BLACK,
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  p: {
    color: colors.BLACK,
    fontSize: 18,
  },
});

export { colors, styles };
