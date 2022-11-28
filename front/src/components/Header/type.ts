import type { ViewProps } from "react-native";

interface IHeaderProps extends Pick<ViewProps, "style"> {
  name: string;
}

export type { IHeaderProps };
