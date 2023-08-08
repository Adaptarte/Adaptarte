import React, { useCallback } from "react";
import { TouchableOpacity, View } from "react-native";

import { Icon } from "components/Icon";
import { Text } from "components/Text";

import {
  getCheckboxColor,
  getCheckboxStyle,
  getCheckboxTextVars,
  styles,
} from "./styles";
import type { CheckBoxProps } from "./types";

const CheckBox = ({
  disabled,
  checked = false,
  label,
  onChange,
  style,
  variant = {},
}: CheckBoxProps): JSX.Element => {
  const textVars = getCheckboxTextVars(variant);
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
        {checked && (
          <Icon
            color={getCheckboxColor(variant, checked)}
            name={"check"}
            size={14}
          />
        )}
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
