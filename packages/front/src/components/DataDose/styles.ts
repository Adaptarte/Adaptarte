import { StyleSheet } from "react-native";

import type { TextVariants } from "components/Text/types";
import { colors } from "styles";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.GLAUCOUS,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    margin: 16,
    padding: 24,
  },
  nextBtn: {
    height: "100%",
    position: "absolute",
    right: 0,
  },
});

const textVars: TextVariants<"details" | "tip"> = {
  details: {
    color: "WHITE",
    size: 1,
  },
  tip: {
    color: "WHITE",
    size: 1,
    weight: "bold",
  },
};

export { styles, textVars };
