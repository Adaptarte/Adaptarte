import { StyleSheet } from "react-native";

import type { TextVariant } from "components/Text/types";
import { colors } from "styles";

const styles = StyleSheet.create({
  backButton: {
    padding: 4
  },
  backImage: {
    height: 16,
    resizeMode: "contain",
    tintColor: colors.GLAUCOUS,
    width: 16
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.WHITE,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  title: {
    marginLeft: 16
  }
});

const textVarTitle: TextVariant = {
  color: "GLAUCOUS",
  size: 5,
  weight: "bold"
};

export { styles, textVarTitle };
