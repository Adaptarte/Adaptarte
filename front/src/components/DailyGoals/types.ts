import type { ViewProps } from "react-native";

interface IGoalsProps extends Pick<ViewProps, "style"> {
  title: string;
  hour: string;
}

export type { IGoalsProps };
