import type { StyleProp, TextStyle } from "react-native";

import type { TColor } from "styles/colors";

type TextSize = 1 | 2 | 3 | 4 | 5;
type TextWeight = "bold" | "normal";

interface TextVariant {
  color?: TColor;
  size?: TextSize;
  weight?: TextWeight;
}

interface TextProps {
  children: string;
  style?: Omit<StyleProp<TextStyle>, "color" | "fontSize" | "fontWeight">;
  variant?: TextVariant;
}

export type { TextProps, TextSize, TextVariant, TextWeight };
