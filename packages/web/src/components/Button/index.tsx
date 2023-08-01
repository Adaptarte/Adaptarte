import React from "react";

import type { ButtonProps } from "./types";

const Button = ({ children, onClick }: ButtonProps): JSX.Element => {
  return (
    <button className={"btn btn-primary"} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
