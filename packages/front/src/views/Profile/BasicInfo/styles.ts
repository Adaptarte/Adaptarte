import { StyleSheet } from "react-native";

import type { TextVariants } from "components/Text/types";
import { colors } from "styles";

const styles = StyleSheet.create({
  title: {
    marginVertical: 16,
  },
  value: {
    borderBottomColor: colors.BLACK,
    borderBottomWidth: 1,
  },
});

const textVars: TextVariants<"info" | "title"> = {
  info: {
    weight: "bold",
  },
  title: {
    color: "GLAUCOUS",
    size: 3,
    weight: "bold",
  },
};

export { styles, textVars };
