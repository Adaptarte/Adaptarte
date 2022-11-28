import type { ReactNode } from "react";
import type { ViewProps } from "react-native";

import type { TColor } from "styles/colors";

interface ICardProps extends Pick<ViewProps, "style"> {
  bgColor: TColor;
  children: ReactNode;
  color: TColor;
}

export type { ICardProps };
