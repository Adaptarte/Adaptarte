import type { ButtonHTMLAttributes } from "react";

type ButtonProps = Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "onClick"
  >

export type { ButtonProps };
