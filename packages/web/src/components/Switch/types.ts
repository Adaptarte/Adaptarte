import type { InputHTMLAttributes } from "react";

interface SwitchProps
  extends Pick<InputHTMLAttributes<HTMLInputElement>, "checked" | "className"> {
  label?: string;
  onChange: (val: boolean) => void;
}

export type { SwitchProps };
