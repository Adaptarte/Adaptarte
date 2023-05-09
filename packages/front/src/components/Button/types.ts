import type { TouchableOpacityProps } from "react-native";

import type { TColor } from "styles/colors";

type ButtonStyle = "ghost" | "outline" | "solid" | "text";

interface ButtonVariant {
  color?: TColor;
  style?: ButtonStyle;
}

interface ButtonProps
  extends Pick<TouchableOpacityProps, "disabled" | "style"> {
  children: React.ReactNode;
  onPress?: () => void;
  variant?: ButtonVariant;
}

export type { ButtonProps, ButtonVariant };
