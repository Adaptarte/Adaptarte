import React from "react";
import FaIcon from "react-native-vector-icons/FontAwesome5";

import { colors } from "styles";

import type { IconProps } from "./types";

const Icon = ({
  name,
  size = 30,
  color = colors.BLACK
}: IconProps): JSX.Element => {
  return (
    <FaIcon color={color} name={name} size={size} testID={`icon-${name}`} />
  );
};

export { Icon };
