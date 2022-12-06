import type { ReactNode } from "react";

import type { TColor } from "styles/colors";

interface ICardProps {
  bgColor: TColor;
  children: ReactNode;
  color: TColor;
  image: number;
}

export type { ICardProps };
