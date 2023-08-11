import { render, screen } from "@testing-library/react";
import React from "react";

import { DashboardStat } from ".";

describe("views/Landing/Dashboard/Stat", () => {
  it("Show stat", () => {
    expect.assertions(2);
    render(<DashboardStat name={"Score"} value={77} />);
    expect(screen.queryByText("Score")).toBeInTheDocument();
    expect(screen.queryByText("77")).toBeInTheDocument();
  });
});
