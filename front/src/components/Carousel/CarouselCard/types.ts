import type { ViewProps } from "react-native";

interface ICarouselCardProps extends Pick<ViewProps, "style"> {
  background?: string;
  description: string;
  image: number;
  onPress?: () => void;
  title: string;
}

export type { ICarouselCardProps };
