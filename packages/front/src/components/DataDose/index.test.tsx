import { render, screen } from "@testing-library/react-native";

import { getDataDoses } from "utils/datadose";

import { DataDose } from ".";

describe("DataDose", () => {
  it("Renders content", () => {
    expect.assertions(2);
    const diseases = { hypertension: true };
    render(<DataDose diseases={diseases} />);

    const texts = screen.queryAllByText(/./);
    expect(texts).toHaveLength(3);

    const values = texts.map((el) => el.children[0]);

    const dose = {
      details: values[1],
      tip: values[0],
    };

    const data = getDataDoses(diseases)
      .map((el) => el.data)
      .flat()
      .filter((e) => {
        return e.details === dose.details;
      })[0];

    const received = { details: data.details, tip: data.tip };

    expect(received).toEqual(dose);
  });
});
