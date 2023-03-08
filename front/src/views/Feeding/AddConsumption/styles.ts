import { StyleSheet } from "react-native";

import { colors } from "styles";

const styles = StyleSheet.create({
  plusButton: {
    alignItems: "center",
    aspectRatio: 1,
    backgroundColor: colors.GLAUCOUS,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center"
  },
  plusImage: {
    height: 24,
    tintColor: colors.BLACK,
    width: 24
  }
});

export { styles };
