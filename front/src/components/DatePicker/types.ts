import type { DatePickerProps as NDatePickerProps } from "react-native-date-picker";

interface DatePickerProps
  extends Pick<NDatePickerProps, "date" | "mode" | "onDateChange"> {
  label?: string;
}

export type { DatePickerProps };
