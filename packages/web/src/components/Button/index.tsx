import React from "react";

import type { ButtonProps } from "./types";

const Button = ({
  children,
  className = "",
  onClick
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`btn btn-primary text-light ${className}`.trimEnd()}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
