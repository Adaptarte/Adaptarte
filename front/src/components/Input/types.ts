import type { KeyboardType, TextInputProps } from "react-native";

interface InputProps
  extends Pick<TextInputProps, "maxLength" | "placeholder" | "value"> {
  label?: string;
  type?: KeyboardType;
  onChange?: TextInputProps["onChangeText"];
}

export type { InputProps };
