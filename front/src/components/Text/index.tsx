import type { FC } from "react";
import React from "react";
import { Text as NText } from "react-native";

import { getVarStyles } from "./styles";
import type { TextProps } from "./types";

const Text: FC<TextProps> = ({ children, styles, variant }): JSX.Element => {
  const varStyles = getVarStyles(variant);

  return <NText style={[styles, varStyles.text]}>{children}</NText>;
};

export { Text };
