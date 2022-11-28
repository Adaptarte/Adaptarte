import type { FC } from "react";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { colors } from "styles";

import { styles } from "./styles";
import type { IButtonProps } from "./types";

const Button: FC<IButtonProps> = ({
  children,
  color = "BLUE",
  onPress,
}: IButtonProps): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={[styles.text, { backgroundColor: colors[color] }]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
