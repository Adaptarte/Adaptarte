import { StyleSheet } from "react-native";

import { colors } from "styles";
import type { Styles } from "utils/types";

import type { TextStyleProps } from "./types";

const styles = StyleSheet.create({
  text: {
    fontFamily: "Lexend-Bold"
  }
});

const sizes: Record<TextStyleProps["size"], number> = {
  1: 14,
  2: 16,
  3: 18,
  4: 22,
  5: 26
};

const familyLexend: Record<TextStyleProps["weight"], string> = {
  bold: "Lexend-Bold",
  normal: "Lexend-Regular"
};

const getVarStyles = ({
  color = "BLACK",
  size = 2,
  weight = "normal"
}: Partial<TextStyleProps>): Styles<"text"> => {
  return {
    text: {
      color: colors[color],
      fontFamily: familyLexend[weight],
      fontSize: sizes[size]
    }
  };
};

export { getVarStyles, styles };
