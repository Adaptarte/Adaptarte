import React from "react";
import FaIcon from "react-native-vector-icons/FontAwesome5";

import { colors } from "styles";

import type { IconProps } from "./types";

const Icon = ({
  color = colors.BLACK,
  name,
  size = 30,
}: IconProps): JSX.Element => {
  return (
    <FaIcon
      color={color}
      name={name}
      size={size}
      solid
      testID={`icon-${name}`}
    />
  );
};

export { Icon };
