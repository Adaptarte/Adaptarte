import type { ReactNode } from "react";

import type { ButtonProps } from "components/Button/types";
import type { ImgProps } from "components/Img/types";
import type { TColor } from "styles/colors";

interface HabitProps extends Pick<ButtonProps, "onPress"> {
  bgColor: TColor;
  checked?: boolean;
  children: ReactNode;
  color: TColor;
  img: ImgProps["src"];
}

export type { HabitProps };
