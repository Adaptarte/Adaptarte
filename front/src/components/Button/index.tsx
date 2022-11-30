import type { FC } from "react";
import React from "react";
import type { TextStyle } from "react-native";
import { Text, TouchableOpacity } from "react-native";

import { colors } from "styles";

import { styles } from "./styles";
import type { IButtonProps } from "./types";

const Button: FC<IButtonProps> = ({
  children,
  color = "BLUE",
  onPress,
  variant = "solid",
}: IButtonProps): JSX.Element => {
  const style: TextStyle = variant === "solid" ? {
    backgroundColor: colors[color],
    color: colors.LIGHT
  } : (variant === "outline" ? {
    borderColor: colors[color],
    color: colors[color]
  } : {
    backgroundColor: colors.WHITE,
    color: colors[color],
    elevation: 8,
  });

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <Text style={[styles.text, style]}>{children}</Text>
    </TouchableOpacity>
  );
};

export { Button };
