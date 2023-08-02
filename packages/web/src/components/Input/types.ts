import type { InputHTMLAttributes } from "react";

interface InputProps
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    "className" | "disabled" | "id" | "name" | "placeholder" | "value"
  > {
  label?: string;
  onChange?: (val: string) => void;
}

export type { InputProps };
