import type { ImageStyle, TextStyle, ViewStyle } from "react-native";

type StrictUnion<T extends object> = Record<never, never> & T;

type Style = ImageStyle | TextStyle | ViewStyle;
type Styles<T extends string> = Record<T, Style>;

export type { Style, Styles, StrictUnion };
