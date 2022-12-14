import { StyleSheet } from "react-native";

import { lexendFamily } from "assets/fonts";
import { colors } from "styles";

const styles = StyleSheet.create({
  text: {
    borderColor: colors.TRANSPARENT,
    borderRadius: 10,
    borderWidth: 2,
    fontFamily: lexendFamily.Bold,
    fontSize: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export { styles };
