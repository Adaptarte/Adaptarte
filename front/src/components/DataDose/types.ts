import type { ViewProps } from "react-native";

interface IDataProps extends Pick<ViewProps, "style"> {
  title: string;
  hour: string;
}

export type { IDataProps };
