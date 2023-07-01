import type { InputProps } from "components/Input/types";
import type { TextProps } from "components/Text/types";

type EditableTextProps = Omit<InputProps, "label" | "secure"> &
  Omit<TextProps, "children" | "variant">;

export type { EditableTextProps };
