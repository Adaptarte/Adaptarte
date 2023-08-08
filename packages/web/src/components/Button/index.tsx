import React from "react";

import type { ButtonProps } from "./types";

const Button = ({
  children,
  className = "",
  disabled,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`btn btn-primary text-light ${className}`.trimEnd()}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
