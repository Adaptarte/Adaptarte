import type { StyleProp, TextStyle } from "react-native";

import type { TColor } from "styles/colors";

type TextSize = 1 | 2 | 3 | 4 | 5;
type TextWeight = "bold" | "normal";

interface TextVariant {
  color?: TColor;
  size?: TextSize;
  weight?: TextWeight;
}

type TextVariants<T extends string> = Record<T, TextVariant>;

interface TextProps {
  children: React.ReactNode;
  style?: Omit<StyleProp<TextStyle>, "color" | "fontSize" | "fontWeight">;
  variant?: TextVariant;
}

export type { TextProps, TextSize, TextVariant, TextVariants, TextWeight };
