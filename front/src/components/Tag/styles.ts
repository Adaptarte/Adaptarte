import { StyleSheet } from "react-native";

import { colors } from "styles";
import type { VarStyle } from "styles/types";

import type { TagVarProps } from "./types";

const styles = StyleSheet.create({
  text: {
    borderRadius: 8,
    margin: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    textShadowColor: colors.WHITE,
    textShadowRadius: 4
  }
});

const getTagStyle = ({ color = "GREY" }: TagVarProps): VarStyle<"text"> => {
  return {
    text: {
      backgroundColor: colors[color]
    }
  };
};

export { getTagStyle, styles };
