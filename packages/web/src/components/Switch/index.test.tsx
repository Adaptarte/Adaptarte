import { fireEvent, render, screen } from "@testing-library/react";
import React, { useState } from "react";

import { Switch } from ".";

describe("components/Switch", () => {
  const label = "Open";
  const TestSwitch = (): JSX.Element => {
    const [value, setValue] = useState(false);

    return <Switch label={label} onChange={setValue} value={value} />;
  };

  beforeEach(() => {
    render(<TestSwitch />);
  });

  it("Show input", () => {
    expect.assertions(1);

    expect(screen.queryByLabelText(label)).toBeInTheDocument();
  });

  it("Toggle value", () => {
    expect.assertions(2);

    const input = screen.queryByLabelText(label);
    expect(input).not.toBeChecked();
    fireEvent.click(screen.getByText(label));
    expect(input).toBeChecked();
  });
});
