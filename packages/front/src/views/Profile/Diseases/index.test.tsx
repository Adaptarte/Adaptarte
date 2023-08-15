import { render, screen } from "@testing-library/react-native";

import { Diseases } from ".";
import { t } from "./translations";

describe("Diseases", () => {
  it("Render diseases", () => {
    expect.assertions(1);

    render(<Diseases diseases={{ hypertension: true }} />);

    const editBtn = screen.queryByText(t().hypertension);
    expect(editBtn).toBeOnTheScreen();
  });
});
