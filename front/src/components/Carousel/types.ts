import type { ViewProps } from "react-native";

import type { ICarouselCardProps } from "./CarouselCard/types";

interface ICarouselProps extends Pick<ViewProps, "style">{
  data: ICarouselCardProps[];
  onPress?: () => void;
}

export type { ICarouselProps };
