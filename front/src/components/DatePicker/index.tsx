import type { FC } from "react";
import React from "react";
import { View } from "react-native";
import NDatePicker from "react-native-date-picker";

import { Text } from "components/Text";
import { colors } from "styles";

import { styles } from "./styles";
import type { DatePickerProps } from "./types";

const DatePicker: FC<DatePickerProps> = ({
  date,
  label,
  mode,
  onDateChange
}: DatePickerProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <NDatePicker
        date={date}
        dividerHeight={2}
        mode={mode}
        onDateChange={onDateChange}
        style={styles.picker}
        textColor={colors.BLACK}
      />
    </View>
  );
};

export { DatePicker };
