import type { ChangeEvent } from "react";
import React, { useCallback } from "react";

import type { SwitchProps } from "./types";

const size = 12;
const transitionDuration = "0.4s";

const Switch = ({
  checked,
  className = "",
  label,
  onChange,
}: SwitchProps): JSX.Element => {
  const handleChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      onChange(ev.target.checked);
    },
    [onChange],
  );

  const bg = `bg-${checked ? "primary" : "secondary"}`;

  return (
    <label className={`d-block ${className}`.trimEnd()}>
      <span
        className={`${bg} d-inline-flex p-1 me-2`}
        style={{
          borderRadius: size,
          transitionDuration,
          width: size * 2.5 + 8,
        }}
      >
        <input
          checked={checked}
          hidden
          onChange={handleChange}
          type={"checkbox"}
        />
        <div
          className={"bg-light rounded-circle"}
          style={{
            aspectRatio: 1,
            transitionDuration,
            translate: checked ? "150%" : "0",
            width: size,
          }}
        />
      </span>
      {label}
    </label>
  );
};

export { Switch };
