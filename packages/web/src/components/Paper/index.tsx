import React from "react";

import type { PaperProps } from "./types";

const Paper = ({ children, className = "" }: PaperProps): JSX.Element => {
  return (
    <div className={`bg-white border p-3 rounded  ${className}`.trimEnd()}>
      {children}
    </div>
  );
};

export { Paper };
