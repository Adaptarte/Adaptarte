import { render, screen } from "@testing-library/react";
import React from "react";

import { Dashboard } from ".";
import { t } from "./translations";

describe("views/Landing/Dashboard", () => {
  beforeEach(() => {
    render(<Dashboard uid={"-"} />);
  });

  it("Show content", () => {
    expect.assertions(6);
    const stats = [
      t().calms,
      t().exercises,
      t().foodIntakes,
      t().medicineIntakes,
      t().tensions.name,
      t().weights,
    ];
    stats.forEach((text) => {
      expect(screen.queryByText(text)).toBeInTheDocument();
    });
  });
});
