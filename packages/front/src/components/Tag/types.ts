import type { TColor } from "styles/colors";

interface TagProps extends TagVarProps {
  children?: string;
}

interface TagVarProps {
  bg?: TColor;
}

export type { TagProps, TagVarProps };
