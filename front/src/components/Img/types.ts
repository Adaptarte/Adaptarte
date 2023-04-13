import type { ImageStyle, StyleProp } from "react-native";

import type { imgs } from "assets/imgs";

type ImgName = keyof typeof imgs;

interface ImgProps {
  src: ImgName | number;
  style?: StyleProp<ImageStyle>;
}

export type { ImgProps };
