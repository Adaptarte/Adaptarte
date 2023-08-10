import React, { useCallback } from "react";

import { t } from "./translations";
import type { SelectProps } from "./types";

const defaultValue = "select";

const Select = ({
  className = "",
  onChange,
  options,
  value = defaultValue,
}: SelectProps): JSX.Element => {
  const handleChange = useCallback(
    (ev: React.ChangeEvent<HTMLSelectElement>) => {
      const { value: id, text: name } = ev.target.selectedOptions[0];
      if (id === defaultValue) {
        onChange(undefined);
      } else {
        onChange({ id, name });
      }
    },
    [onChange],
  );

  return (
    <select
      className={`form-select ${className}`.trimEnd()}
      onChange={handleChange}
      value={value}
    >
      <option value={defaultValue}>{t().select}</option>
      {options.map((el) => (
        <option key={el.id} value={el.id}>
          {el.name}
        </option>
      ))}
    </select>
  );
};

export { Select };
