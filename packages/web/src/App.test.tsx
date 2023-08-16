import { render, screen, waitFor } from "@testing-library/react";
import React from "react";

import { App } from "./App";

describe("App", () => {
  it("Show app name", async () => {
    expect.assertions(1);
    render(<App />);
    await waitFor(() => screen.getByText("Adaptarte"));
    expect(screen.queryByText("Adaptarte")).toBeInTheDocument();
  });
});
