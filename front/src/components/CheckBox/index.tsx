import type { FC } from "react";
import React, { useCallback, useState } from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import type { ICheckBoxProps } from "./types";

const CheckBox: FC<ICheckBoxProps> = ({
  isChecked = false,
  onChange,
}: ICheckBoxProps): JSX.Element => {
  const [value, setValue] = useState(isChecked);

  const handleSwitch = useCallback((): void => {
    const newValue = !value;
    onChange?.(newValue);
    setValue(newValue);
  }, [setValue, value]);

  return (
    <TouchableOpacity onPress={handleSwitch} style={[styles.box]}>
      <Text>{value ? "✓" : " "}</Text>
    </TouchableOpacity>
  );
};

export { CheckBox };
