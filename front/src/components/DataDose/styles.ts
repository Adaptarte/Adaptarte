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
    padding: 24
  },
  img: {
    height: 80,
    marginLeft: 24,
    resizeMode: "contain",
    width: 80
  },
  textWrapper: {
    flexBasis: 0,
    flexGrow: 1
  }
});

const textVars: TextVariants<"details" | "tip"> = {
  details: {
    color: "WHITE",
    size: 1
  },
  tip: {
    color: "WHITE",
    size: 1,
    weight: "bold"
  }
};

export { styles, textVars };
