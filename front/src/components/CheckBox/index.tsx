import type { FC } from "react";
import React, { useCallback, useState } from "react";
import type { TextStyle } from "react-native";
import { Text, TouchableOpacity } from "react-native";

import { colors } from "styles";

import { styles } from "./styles";
import type { ICheckBoxProps } from "./types";

const CheckBox: FC<ICheckBoxProps> = ({
  active = false,
  color = colors.WHITE,
  isChecked = false,
  onChange,
  variant = "rounde",
}: ICheckBoxProps): JSX.Element => {
  const [value, setValue] = useState(isChecked);

  const style = variant === "circle" ? {
    borderRadius: 20,
    height: 15,
    width: 15,
  } : null;
  
  const textStyle: TextStyle = variant === "circle" ? {
    color: colors.ORANGE,
    fontSize: 8,
  } : {};
  

  const handleSwitch = useCallback((): void => {
    const newValue = !value;
    onChange?.(newValue);
    setValue(newValue);
    
  }, [setValue, value]);

  return (
    <TouchableOpacity 
      onPress = { handleSwitch } 
      style={[styles.container, { borderColor: color }, style]}>
      { variant === "rounde" ? 
        <Text style={textStyle}>{value ? "✓" : " "}</Text> :
        <Text style={textStyle}>{active ? "✓" : " "}</Text>
      }
    </TouchableOpacity>
  );
};

export { CheckBox };
