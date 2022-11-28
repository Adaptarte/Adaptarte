import type { ReactNode } from "react";
import type { ViewProps } from "react-native";

interface ISubtitleProps extends Pick<ViewProps, "style"> {
  children: ReactNode;
}

export type { ISubtitleProps };
