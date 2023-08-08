import { StyleSheet } from "react-native";

import type { TextVariant } from "components/Text/types";
import { colors } from "styles";
import type { VarStyle } from "styles/types";
import type { Style } from "utils/types";

import type { ButtonVariant } from "./types";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: colors.TRANSPARENT,
    borderRadius: 8,
    borderWidth: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 4,
  },
  text: {
    paddingHorizontal: 4,
    paddingVertical: 8,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

const getButtonTextVar = ({
  color = "GLAUCOUS",
  style = "ghost",
}: ButtonVariant): TextVariant => {
  return {
    color: style === "solid" ? "WHITE" : color,
    size: 1,
    weight: "normal",
  };
};

const getButtonStyle = (
  { color = "GLAUCOUS", style = "ghost" }: ButtonVariant,
  disabled = false,
): Style => {
  const varStyle: VarStyle<typeof style> = {
    ghost: {},
    outline: {
      borderColor: colors[color],
    },
    solid: {
      backgroundColor: colors[color],
    },
    text: {
      backgroundColor: colors.WHITE,
      elevation: 8,
    },
  };

  return {
    ...varStyle[style],
    opacity: disabled ? 0.6 : 1,
  };
};

export { getButtonStyle, getButtonTextVar, styles };
