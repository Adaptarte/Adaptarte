import type { ReactNode } from "react";
import type { ViewProps } from "react-native";

import type { TColor } from "styles/colors";

type TVariant = "outline" | "solid" | "text";

interface IButtonProps extends Pick<ViewProps, "style"> {
  children: ReactNode;
  color?: TColor;
  onPress?: () => void;
  variant?: TVariant;
}

export type { IButtonProps };
