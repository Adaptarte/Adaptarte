import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { Button } from ".";

describe("components/Button", () => {
  const text = "Click me";
  let onClick: jest.Mock;

  beforeEach(() => {
    onClick = jest.fn();
    render(<Button onClick={onClick}>{text}</Button>);
  });

  it("Show content", () => {
    expect.assertions(1);
    expect(screen.queryByText(text)).toBeInTheDocument();
  });

  it("Be clickable", () => {
    expect.assertions(2);
    expect(onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByText(text));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
