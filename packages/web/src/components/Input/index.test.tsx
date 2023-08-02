import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { Input } from ".";

describe("components/Input", () => {
  const label = "Patient";

  it("Render input", () => {
    expect.assertions(1);
    render(<Input placeholder={label} />);
    expect(screen.queryByPlaceholderText(label)).toBeInTheDocument();
  });

  it("Render with label", () => {
    expect.assertions(2);
    render(<Input id={"patient"} label={label} />);
    expect(screen.queryByText(label)).toBeInTheDocument();
    expect(screen.queryByLabelText(label)).toBeInTheDocument();
  });

  it("Listen changes", () => {
    expect.assertions(1);
    const onChange = jest.fn();
    render(<Input onChange={onChange} placeholder={label} />);
    fireEvent.change(screen.getByPlaceholderText(label), {
      target: { value: "John" }
    });
    expect(onChange).toHaveBeenCalledWith("John");
  });
});
