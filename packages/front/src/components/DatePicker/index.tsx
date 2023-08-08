import React from "react";
import { View } from "react-native";
import NDatePicker from "react-native-date-picker";

import { InputLabel } from "components/Input/Label";
import { colors } from "styles";

import { styles } from "./styles";
import type { DatePickerProps } from "./types";

const DatePicker = ({
  date,
  label,
  maxDate,
  minDate,
  mode,
  onDateChange,
}: DatePickerProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <InputLabel>{label}</InputLabel>
      <NDatePicker
        date={date}
        dividerHeight={2}
        locale={"es"}
        maximumDate={maxDate}
        minimumDate={minDate}
        mode={mode}
        onDateChange={onDateChange}
        style={styles.picker}
        textColor={colors.BLACK}
      />
    </View>
  );
};

export { DatePicker };
