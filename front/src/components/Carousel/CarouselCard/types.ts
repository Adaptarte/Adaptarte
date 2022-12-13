import type { ViewProps } from "react-native";

interface ICarouselCardProps extends Pick<ViewProps, "style"> {
  background?: string;
  complete?: boolean;
  description: string;
  image: number;
  onPress?: () => void;
  title: string;
}

export type { ICarouselCardProps };
