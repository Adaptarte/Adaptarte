import { StyleSheet } from "react-native";

import { lexendFamily } from "assets/fonts";
import { colors } from "styles";

const styles = StyleSheet.create({
  text: {
    borderColor: colors.TRANSPARENT,
    borderRadius: 15,
    borderWidth: 2,
    fontFamily: lexendFamily.Bold,
    fontSize: 12,
    paddingHorizontal: 5,
    paddingVertical: 8,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export { styles };
