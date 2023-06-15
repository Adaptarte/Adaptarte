import { render, screen } from "@testing-library/react-native";

import { DataDose } from ".";
import { dataDoses } from "./data";

describe("DataDose", () => {
  it("Renders content", () => {
    expect.assertions(2);
    render(<DataDose />);

    const texts = screen.queryAllByText(/./);
    expect(texts).toHaveLength(2);

    const values = texts.map((el) => el.children[0]);
    const dose = {
      details: values[1],
      tip: values[0]
    };

    expect(dataDoses.flat()).toContainEqual(dose);
  });
});
