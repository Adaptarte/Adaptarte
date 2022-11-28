import type { ReactNode } from "react";
import type { ViewProps } from "react-native";

import type { TColor } from "styles/colors";

interface IButtonProps extends Pick<ViewProps, "style"> {
  children: ReactNode;
  color?: TColor;
  onPress?: () => void;
}

export type { IButtonProps };
