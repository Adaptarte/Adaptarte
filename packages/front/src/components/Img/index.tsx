import { Image } from "react-native";

import { imgs } from "assets/imgs";

import { styles } from "./styles";
import type { ImgProps } from "./types";

const Img = ({ src, style }: ImgProps): JSX.Element => {
  return (
    <Image
      accessibilityValue={{ text: src }}
      source={imgs[src]}
      style={[styles.img, style]}
    />
  );
};

export { Img };
