import { StyleSheet } from "react-native";

import type { TextVariant } from "components/Text/types";
import { colors } from "styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    borderRadius: 8,
    flexGrow: 1,
    padding: 16
  },
  header: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16
  },
  modal: {
    alignItems: "center",
    backgroundColor: colors.BLACK_OPACITY,
    display: "flex",
    flexDirection: "row",
    height: "100%",
    justifyContent: "center",
    padding: 8,
    width: "100%"
  }
});

const titleVar: TextVariant = {
  color: "GLAUCOUS",
  size: 4,
  weight: "bold"
};

export { styles, titleVar };
