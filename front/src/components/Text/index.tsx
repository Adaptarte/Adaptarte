import type { FC } from "react";
import React from "react";
import { Text as NText } from "react-native";

import { getTextStyle } from "./styles";
import type { TextProps } from "./types";

const Text: FC<TextProps> = ({
  children,
  style,
  variant = {}
}): JSX.Element => {
  const varStyle = getTextStyle(variant);

  return <NText style={[style, varStyle]}>{children}</NText>;
};

export { getTextStyle, Text };
