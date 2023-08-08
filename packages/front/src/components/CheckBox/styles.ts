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
    width: 24,
  },
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  label: {
    marginLeft: 8,
  },
});

const getCheckboxColor = (
  { color = "BLACK", checkedColor = color }: CheckBoxVariant,
  checked: boolean,
): string => {
  return colors[checked ? checkedColor : color];
};

const getCheckboxStyle = (
  {
    border = "rounded",
    color = "BLACK",
    checkedColor = color,
  }: CheckBoxVariant,
  checked: boolean,
  disabled = false,
): Style => {
  return {
    borderColor: getCheckboxColor({ checkedColor, color }, checked),
    borderRadius: border === "circle" ? 12 : 8,
    opacity: disabled ? 0.6 : 1,
  };
};

const getCheckboxTextVars = ({
  color = "BLACK",
}: CheckBoxVariant): TextVariants<"label"> => {
  return {
    label: {
      color,
      weight: "bold",
    },
  };
};

export { getCheckboxColor, getCheckboxStyle, getCheckboxTextVars, styles };
