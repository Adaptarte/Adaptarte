import type { FC } from "react";
import React from "react";
import { Switch as SW, View } from "react-native";

import { colors } from "styles";

import { styles } from "./styles";
import type { ISwitchProps } from "./types";

const Switch: FC<ISwitchProps> = ({
  isEnabled,
  onChange,
}) => {

  const styleSwitchContainer = isEnabled ? { 
    borderColor: colors.BLUE
  } : {
    borderColor: colors.GREY
  };

  return (
    <View style={[styles.switchContainer, styleSwitchContainer]}>
      <SW 
        onChange={onChange}
        style={styles.switch}
        thumbColor={isEnabled ? "#1F4BFF" : "#5A5A5A"}
        trackColor={{ 
          false: colors.TRANSPARENT, 
          true: colors.TRANSPARENT 
        }}
        value={isEnabled}
      />
    </View>
  );
};

export { Switch };
