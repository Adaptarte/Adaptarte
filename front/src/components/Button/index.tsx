import React from "react";
import { TouchableOpacity } from "react-native";

import { Text } from "components/Text";

import { getButtonStyle, getButtonTextVar, styles } from "./styles";
import type { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  onPress,
  style,
  variant = {}
}: ButtonProps): JSX.Element => {
  const textVar = getButtonTextVar(variant);
  const varStyle = getButtonStyle(variant, disabled);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, varStyle, style]}
    >
      <Text style={[styles.text]} variant={textVar}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
