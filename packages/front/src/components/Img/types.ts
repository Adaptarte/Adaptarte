import type { ImageSourcePropType, ImageStyle, StyleProp } from "react-native";

import type { imgs } from "assets/imgs";

type ImgName = keyof typeof imgs;

interface ImgProps {
  src: ImageSourcePropType | ImgName;
  style?: StyleProp<ImageStyle>;
}

export type { ImgName, ImgProps };
