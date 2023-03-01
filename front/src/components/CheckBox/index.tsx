import type { FC } from "react";
import React, { useCallback, useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";

import { colors } from "styles";
import type { VarStyle } from "styles/types";

import { styles } from "./styles";
import type { CheckBoxProps, CheckBoxVariant } from "./types";

const CheckBox: FC<CheckBoxProps> = ({
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

  const checkVarStyle: VarStyle<CheckBoxVariant> = {
    circle: {
      color: colors.ORANGE
    },
    rounded: {}
  };

  const handleSwitch = useCallback((): void => {
    const newValue = !value;
    onChange?.(newValue);
    setValue(newValue);
  }, [setValue, value]);

  return (
    <TouchableOpacity
      onPress={handleSwitch}
      style={[styles.container, containerVarStyle[variant]]}
    >
      <Text style={[styles.check, checkVarStyle[variant]]}>
        {value ? "✓" : " "}
      </Text>
    </TouchableOpacity>
  );
};

export { CheckBox };
