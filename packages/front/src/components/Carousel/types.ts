import type { ViewProps } from "react-native";

import type { CarouselCardProps } from "./CarouselCard/types";

interface CarouselProps extends Pick<ViewProps, "style"> {
  data: CarouselCardProps[];
  onPress?: () => void;
}

export type { CarouselProps };
