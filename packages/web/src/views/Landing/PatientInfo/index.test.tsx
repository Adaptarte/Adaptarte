import { render, screen } from "@testing-library/react";
import React from "react";

import { PatientInfo } from ".";
import { t } from "./translations";

describe("views/Landing/PatientInfo", () => {
  it("Show content", () => {
    expect.assertions(7);
    render(<PatientInfo />);
    const texts = [t().status, t().id, t().name, t().phone];
    texts.forEach((text) => {
      expect(screen.queryByText(text)).toBeInTheDocument();
    });
    expect(screen.queryAllByText(t().undefined)).toHaveLength(3);
    expect(screen.queryByText(t().inactive)).toBeInTheDocument();
    expect(screen.queryByText(t().active)).not.toBeInTheDocument();
  });
});
