import type { TextProps } from "react-native";

import type { TColor } from "styles/colors";

type TTextSize = 1 | 2 | 3 | 4 | 5;
type TTextWeight = "normal" | "bold";

interface ITextProps extends Pick<TextProps, "style"> {
  children?: string;
  color?: TColor;
  size?: TTextSize;
  weight?: TTextWeight;
}

export type { ITextProps, TTextSize };
