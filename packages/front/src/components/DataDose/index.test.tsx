import { render, screen } from "@testing-library/react-native";

import { DataDose } from ".";
import { getDataDoses } from "./data";

describe("DataDose", () => {
  it("Renders content", () => {
    expect.assertions(2);
    const diseases = { hypertension: true };
    render(<DataDose diseases={diseases} />);

    const texts = screen.queryAllByText(/./);
    expect(texts).toHaveLength(2);

    const values = texts.map((el) => el.children[0]);
    const dose = {
      details: values[1],
      tip: values[0]
    };

    expect(
      getDataDoses(diseases)
        .map((el) => el.data)
        .flat()
    ).toContainEqual(dose);
  });
});
