import { Image } from "react-native";

import { imgs } from "assets/imgs";

import { styles } from "./styles";
import type { ImgProps } from "./types";

const Img = ({ src, style }: ImgProps): JSX.Element => {
  return (
    <Image
      source={typeof src === "number" ? src : imgs[src]}
      style={[styles.img, style]}
    />
  );
};

export { Img };
