import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import { colors } from "styles";

import type { IconProps } from "./types";

const IconF = ({
  name,
  size = 30,
  color = colors.BLACK
}: IconProps): JSX.Element => {
  return <Icon color={color} name={name} size={size} />;
};

export { IconF };
