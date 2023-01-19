import type { KeyboardTypeOptions } from "react-native";

interface IInputProps {
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  onChange?: (val: React.SetStateAction<string>) => void;
  value: string;
}

export type { IInputProps };
