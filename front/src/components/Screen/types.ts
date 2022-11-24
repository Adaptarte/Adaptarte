import type { ReactNode } from "react";
import type { ViewProps } from "react-native";

interface IScreenProps extends Pick<ViewProps, "style"> {
  children: ReactNode;
}

export type { IScreenProps };
