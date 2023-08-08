import { render, screen } from "@testing-library/react";
import React, { useState } from "react";

import { AddMedicineRecipe } from ".";
import { t } from "./translations";

describe("views/Landing/MedicineRecipe/Add", () => {
  const TestAddMedicineRecipe = (): JSX.Element => {
    const [visible, setVisible] = useState(true);

    return <AddMedicineRecipe onClose={setVisible} visible={visible} />;
  };

  beforeEach(() => {
    render(<TestAddMedicineRecipe />);
  });

  it("Show content", () => {
    expect.assertions(4);

    const texts = [
      t().details.label,
      t().interval.label,
      t().medicine.label,
      t().save,
    ];
    texts.forEach((text) => {
      expect(screen.queryByText(text)).toBeInTheDocument();
    });
  });
});
