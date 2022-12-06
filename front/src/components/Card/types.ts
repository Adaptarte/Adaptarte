import type { ReactNode } from "react";

import type { IButtonProps } from "components/Button/types";
import type { TColor } from "styles/colors";

interface ICardProps extends Pick<IButtonProps, "onPress"> {
  bgColor: TColor;
  children: ReactNode;
  color: TColor;
  image: number;
}

export type { ICardProps };
