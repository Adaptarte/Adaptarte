import type { FC } from "react";
import React from "react";
import { TextInput, View } from "react-native";

import { styles } from "./styles";
import type { IInputProps } from "./types";

const Input: FC<IInputProps> = ({
  keyboardType = "default",
  maxLength = 2,
  onChange,
  value
}: IInputProps): JSX.Element => {
  return (
    <View style={styles.numberInputContainer}>
      <TextInput
        keyboardType={keyboardType}
        maxLength={maxLength}
        onChangeText={onChange}
        style={styles.numberInput}
        value={value}
      />
    </View>
  );
};

export { Input };
