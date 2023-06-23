import { render, screen } from "@testing-library/react-native";

import { Diseases } from ".";

describe("Diseases", () => {
  it("Render diseases", () => {
    expect.assertions(1);

    render(<Diseases diseases={{ hypertension: true }} />);

    const editBtn = screen.queryByText("Editar enfermedades");
    expect(editBtn).toBeOnTheScreen();
  });
});
