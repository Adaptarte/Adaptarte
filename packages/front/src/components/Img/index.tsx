import { Image } from "react-native";

import { imgs } from "assets/imgs";

import { styles } from "./styles";
import type { ImgProps } from "./types";

const Img = ({ src, style }: ImgProps): JSX.Element => {
  const byName = typeof src === "string";

  return (
    <Image
      accessibilityValue={{ text: byName ? src : undefined }}
      source={byName ? imgs[src] : src}
      style={[styles.img, style]}
      testID={byName ? `img-${src}` : undefined}
    />
  );
};

export { Img };
