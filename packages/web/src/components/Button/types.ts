import type { ButtonHTMLAttributes } from "react";

type ButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "className" | "onClick"
>;

export type { ButtonProps };
