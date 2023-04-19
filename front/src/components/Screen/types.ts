import type { ReactNode } from "react";
import type { ViewProps } from "react-native";

import type { TColor } from "styles/colors";

interface IScreenProps extends Pick<ViewProps, "style"> {
  bg?: TColor;
  children: ReactNode;
}

export type { IScreenProps };
