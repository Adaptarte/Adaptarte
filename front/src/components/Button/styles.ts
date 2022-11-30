import { StyleSheet } from "react-native";

import { colors } from "styles";

const styles = StyleSheet.create({
  text: {
    borderColor: colors.TRANSPARENT,
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 12,
    paddingVertical: 8,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export { styles };
