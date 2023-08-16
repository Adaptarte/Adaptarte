import { render, screen } from "@testing-library/react";
import React from "react";

import type { DBMedicineRecipe } from "utils/db/types";

import { MedicineRecipe } from ".";
import { t } from "./translations";

describe("MedicineRecipe", () => {
  const data: DBMedicineRecipe = {
    date: new Date(),
    details: "Take before breakfast",
    interval: 8,
    medicine: "Acetaminophen",
  };

  beforeEach(() => {
    render(<MedicineRecipe data={data} id={"0"} />);
  });

  it("Show content", () => {
    expect.assertions(5);
    const texts = [
      t().delete,
      t().details,
      t().interval,
      data.medicine,
      data.interval,
    ];
    texts.forEach((text) => {
      expect(screen.queryByText(text)).toBeInTheDocument();
    });
  });
});
