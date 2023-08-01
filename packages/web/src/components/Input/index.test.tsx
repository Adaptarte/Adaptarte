import { render, screen } from "@testing-library/react";
import React from "react";

import { Input } from ".";

describe("components/Input", () => {
  const label = "Patient";
  const onChange = jest.fn();

  it("Render input", () => {
    expect.assertions(1);
    render(<Input onChange={onChange} placeholder={label} />);
    expect(screen.queryByPlaceholderText(label)).toBeInTheDocument();
  });

  it("Render with label", () => {
    expect.assertions(2);
    render(<Input id={"patient"} label={label} onChange={onChange} />);
    expect(screen.queryByText(label)).toBeInTheDocument();
    expect(screen.queryByLabelText(label)).toBeInTheDocument();
  });
});
