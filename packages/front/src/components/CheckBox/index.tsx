import React, { useCallback } from "react";
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
  const textVars = getCheckboxTextVars(variant, checked);
  const varStyle = getCheckboxStyle(variant, checked, disabled);

  const handlePress = useCallback(() => {
    onChange?.(!checked);
  }, [checked, onChange]);

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={handlePress}
      style={[styles.container, style]}
    >
      <View style={[styles.box, varStyle]}>
        <Text variant={textVars.check}>{checked ? "✓" : " "}</Text>
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
