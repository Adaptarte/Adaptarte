import type { ChangeEvent } from "react";
import React, { useCallback } from "react";

import type { InputProps } from "./types";

const Input = ({
  className = "",
  disabled,
  id,
  label,
  name,
  onChange,
  placeholder,
  value
}: InputProps): JSX.Element => {
  const handleChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      onChange?.(ev.target.value);
    },
    [onChange]
  );

  return (
    <div className={className}>
      {label === undefined ? null : (
        <label className={"mb-1"} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={"form-control"}
        disabled={disabled}
        id={id}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export { Input };
