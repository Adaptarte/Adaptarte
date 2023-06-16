import type { ViewStyle } from "react-native";

import type { TColor } from "styles/colors";

type CheckBoxBorder = "circle" | "rounded";

interface CheckBoxVariant {
  border?: CheckBoxBorder;
  checkedColor?: TColor;
  color?: TColor;
}

interface CheckBoxProps {
  disabled?: boolean;
  checked?: boolean;
  label?: string;
  onChange?: (val: boolean) => void;
  style?: ViewStyle;
  variant?: CheckBoxVariant;
}

export type { CheckBoxProps, CheckBoxVariant };
