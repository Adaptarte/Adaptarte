import type { TextStyle } from "react-native";

import type { TColor } from "styles/colors";

interface TextStyleProps {
  color: TColor;
  size: 1 | 2 | 3 | 4 | 5;
  weight: "bold" | "normal";
}

interface TextProps {
  children: string;
  styles: Omit<TextStyle, "color" | "fontSize" | "fontWeight">;
  variant: Partial<TextStyleProps>;
}

export type { TextProps, TextStyleProps };
