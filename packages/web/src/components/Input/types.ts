import type { InputHTMLAttributes } from "react";

interface InputProps
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    "disabled" | "id" | "name" | "onChange" | "placeholder" | "value"
  > {
  label?: string;
}

export type { InputProps };
