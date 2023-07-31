import { render, screen } from "@testing-library/react";
import React from "react";

import { App } from "./App";

describe("App", () => {
  it("Show app name", () => {
    expect.assertions(1);
    render(<App />);
    expect(screen.getByText("Adaptarte")).toBeInTheDocument();
  });
});
