import { render, screen } from "@testing-library/react";
import React from "react";

import { Paper } from ".";

describe("components/Paper", () => {
  const content = "Content";
  it("Show content", () => {
    expect.assertions(1);
    render(<Paper>{content}</Paper>);
    expect(screen.queryByText(content)).toBeInTheDocument();
  });
});
