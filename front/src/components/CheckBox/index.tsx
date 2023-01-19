import type { FC } from "react";
import React, { useCallback, useState } from "react";
import type { TextStyle } from "react-native";
import { Text, TouchableOpacity } from "react-native";

import { colors } from "styles";

import { styles } from "./styles";
import type { ICheckBoxProps } from "./types";

const CheckBox: FC<ICheckBoxProps> = ({
  active = false,
  isChecked = false,
  isInfoRegistered = false,
  onChange,
  variant = "rounde",
}: ICheckBoxProps): JSX.Element => {
  const [value, setValue] = useState(isChecked);

  const style = variant === "circle" ? {
    borderColor: colors.WHITE,
    borderRadius: 20,
    height: 15,
    width: 15,
  } : null;
  
  const textStyle: TextStyle = variant === "circle" ? {
    color: colors.ORANGE,
    fontSize: 8,
  } : {};

  const containerStyleActive = variant === "circle" ? {
    borderColor: colors.ORANGE,
  } : {};

  const containerStyleAct = value ? {
    borderColor: colors.GREEN,
    color: colors.GREEN,
  } : null;

  const handleSwitch = useCallback((): void => {
    if (!isInfoRegistered) {
      const newValue = !value;
      onChange?.(newValue);
      setValue(newValue);
    }
  }, [setValue, value]);

  return (
    <TouchableOpacity 
      onPress = { handleSwitch } 
      style={[
        styles.container, 
        containerStyleAct,
        style,
        active ? containerStyleActive : null
      ]}>
      { variant === "rounde" ? 
        <Text 
          style={[textStyle, containerStyleAct]}
        >
          {isInfoRegistered ? active ? "✓" : " " : value ? "✓" : " "}
        </Text> :
        <Text style={textStyle}>{active ? "✓" : " "}</Text>
      }
    </TouchableOpacity>
  );
};

export { CheckBox };
