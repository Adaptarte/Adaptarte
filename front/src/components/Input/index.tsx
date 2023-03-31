import type { FC } from "react";
import React from "react";
import { TextInput, View } from "react-native";

import { colors } from "styles";

import { InputLabel } from "./Label";
import { styles } from "./styles";
import type { InputProps } from "./types";

const Input: FC<InputProps> = ({
  label,
  maxLength,
  onChange,
  placeholder,
  type = "default",
  value
}: InputProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <InputLabel>{label}</InputLabel>
      <TextInput
        keyboardType={type}
        maxLength={maxLength}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={colors.GREY}
        style={[styles.input, styles.inputText]}
        value={value}
      />
    </View>
  );
};

export { Input };
