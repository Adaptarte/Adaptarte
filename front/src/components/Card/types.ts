import type { ReactNode } from "react";

import type { ButtonProps } from "components/Button/types";
import type { ImgProps } from "components/Img/types";
import type { TColor } from "styles/colors";

interface CardProps extends Pick<ButtonProps, "onPress"> {
  bgColor: TColor;
  children: ReactNode;
  color: TColor;
  img: ImgProps["src"];
}

export type { CardProps };
