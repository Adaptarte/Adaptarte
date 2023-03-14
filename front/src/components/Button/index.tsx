import type { FC } from "react";
import React from "react";
import { TouchableOpacity } from "react-native";

import { Text } from "components/Text";
import type { TextVariant } from "components/Text/types";
import { colors } from "styles";
import type { VarStyle } from "styles/types";

import { styles } from "./styles";
import type { IButtonProps } from "./types";

const Button: FC<IButtonProps> = ({
  children,
  color = "BLUE",
  onPress,
  style,
  variant = "solid"
}: IButtonProps): JSX.Element => {
  const varStyle: VarStyle<typeof variant> = {
    outline: {
      borderColor: colors[color]
    },
    solid: {
      backgroundColor: colors[color]
    },
    text: {
      backgroundColor: colors.WHITE,
      elevation: 8
    }
  };

  const textVar: TextVariant = {
    color: variant === "solid" ? "WHITE" : color
  };

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={style}>
      <Text style={[styles.text, varStyle[variant]]} variant={textVar}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
