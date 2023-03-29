import { StyleSheet } from "react-native";

import type { TextVariants } from "components/Text/types";
import { colors } from "styles";
import type { Style } from "utils/types";

import type { CheckBoxVariant } from "./types";

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    borderWidth: 2,
    display: "flex",
    height: 24,
    justifyContent: "center",
    width: 24
  },
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row"
  },
  label: {
    marginLeft: 8
  }
});

const getCheckboxStyle = (
  {
    border = "rounded",
    color = "BLACK",
    checkedColor = color
  }: CheckBoxVariant,
  checked = false,
  disabled = false
): Style => {
  return {
    borderColor: colors[checked ? checkedColor : color],
    borderRadius: border === "circle" ? 12 : 8,
    opacity: disabled ? 0.6 : 1
  };
};

const getCheckboxTextVars = (
  { color = "BLACK", checkedColor = color }: CheckBoxVariant,
  checked = false
): TextVariants<"check" | "label"> => {
  return {
    check: {
      color: checked ? checkedColor : color,
      size: 1,
      weight: "bold"
    },
    label: {
      color,
      weight: "bold"
    }
  };
};

export { getCheckboxStyle, getCheckboxTextVars, styles };
