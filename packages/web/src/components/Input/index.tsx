import React from "react";

import type { InputProps } from "./types";

const Input = ({
  disabled,
  id,
  label,
  name,
  onChange,
  placeholder,
  value
}: InputProps): JSX.Element => {
  return (
    <div className={"mb-2 mt-1"}>
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
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export { Input };
