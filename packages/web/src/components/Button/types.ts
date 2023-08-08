import type { ButtonHTMLAttributes } from "react";

type ButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "className" | "disabled" | "onClick"
>;

export type { ButtonProps };
