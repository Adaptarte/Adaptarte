import type { ReactNode } from "react";

import type { ButtonProps } from "components/Button/types";
import type { TColor } from "styles/colors";

interface ICardProps extends Pick<ButtonProps, "onPress"> {
  bgColor: TColor;
  children: ReactNode;
  color: TColor;
  image: number;
}

export type { ICardProps };
