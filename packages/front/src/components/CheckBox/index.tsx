import React, { useCallback, useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";

import { Text } from "components/Text";

import { getCheckboxStyle, getCheckboxTextVars, styles } from "./styles";
import type { CheckBoxProps } from "./types";

const CheckBox = ({
  disabled,
  checked,
  label,
  onChange,
  style,
  variant = {}
}: CheckBoxProps): JSX.Element => {
  const [value, setValue] = useState(checked);

  useEffect(() => {
    setValue(checked);
  }, [checked, setValue]);

  const handleSwitch = useCallback((): void => {
    const newValue = !value;
    onChange?.(newValue);
    setValue(newValue);
  }, [onChange, setValue, value]);

  const textVars = getCheckboxTextVars(variant, value);
  const varStyle = getCheckboxStyle(variant, value, disabled);

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={handleSwitch}
      style={[styles.container, style]}
    >
      <View style={[styles.box, varStyle]}>
        <Text variant={textVars.check}>{value ? "✓" : " "}</Text>
      </View>
      {label && (
        <Text style={styles.label} variant={textVars.label}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export { CheckBox };
