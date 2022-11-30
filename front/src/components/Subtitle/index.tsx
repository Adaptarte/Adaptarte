import type { FC } from "react";
import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import type { ISubtitleProps } from "./types";

const Subtitle: FC<ISubtitleProps> = ({ 
  children, 
  style 
}: ISubtitleProps): JSX.Element => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
};

export { Subtitle };
