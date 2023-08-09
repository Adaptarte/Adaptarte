import { render, screen } from "@testing-library/react";
import React from "react";

import { Authentication } from ".";
import { t } from "./translations";

describe("views/Authentication", () => {
  beforeEach(() => {
    render(<Authentication />);
  });

  it("Show content", () => {
    expect.assertions(4);
    expect(screen.queryByText(t().title)).toBeInTheDocument();
    expect(screen.queryByText(t().email.label)).toBeInTheDocument();
    expect(screen.queryByText(t().password.label)).toBeInTheDocument();
    expect(screen.queryByText(t().signIn)).toBeInTheDocument();
  });
});
