import type { FC } from "react";
import React, { useCallback, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

import { Text } from "components/Text";
import type { TextVariant } from "components/Text/types";
import { colors } from "styles";
import type { VarStyle } from "styles/types";

import { styles } from "./styles";
import type { CheckBoxProps, CheckBoxVariant } from "./types";

const CheckBox: FC<CheckBoxProps> = ({
  disabled = false,
  isChecked = false,
  onChange,
  variant = "rounded"
}: CheckBoxProps): JSX.Element => {
  const [value, setValue] = useState(isChecked);

  useEffect(() => {
    if (isChecked !== value) {
      setValue(isChecked);
    }
  }, [isChecked, setValue, value]);

  const containerVarStyle: VarStyle<CheckBoxVariant> = {
    circle: {
      borderColor: isChecked ? colors.ORANGE : colors.WHITE,
      borderRadius: 12
    },
    rounded: {
      borderColor: isChecked ? colors.GREEN : undefined
    }
  };

  const textVarCheck: TextVariant = {
    color: variant === "circle" ? "ORANGE" : "GREEN",
    size: 1,
    weight: "bold"
  };

  const handleSwitch = useCallback((): void => {
    const newValue = !value;
    onChange?.(newValue);
    setValue(newValue);
  }, [setValue, value]);

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={handleSwitch}
      style={[styles.container, containerVarStyle[variant]]}
    >
      <Text variant={textVarCheck}>{value ? "✓" : " "}</Text>
    </TouchableOpacity>
  );
};

export { CheckBox };
