import type { FC } from "react";
import React from "react";
import type { TextStyle } from "react-native";
import { Text as RNText } from "react-native";

import { colors } from "styles";

import type { ITextProps, TTextSize } from "./types";

const sizes: Record<TTextSize, number> = {
  1: 14,
  2: 16,
  3: 18,
  4: 22,
  5: 26
};

const Text: FC<ITextProps> = ({ 
  children, 
  color = "BLACK",
  size = 1,
  style,
  weight = "normal",
}: ITextProps): JSX.Element => {
  const dynamicStyle: TextStyle = {
    color: colors[color],
    fontSize: sizes[size],
    fontWeight: weight,
  };

  return (
    <RNText style={[style, dynamicStyle]}>{children}</RNText>
  );
};

export { Text };
