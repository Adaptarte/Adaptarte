import { fireEvent, render, screen } from "@testing-library/react-native";

import { EditDiseases } from ".";

describe("Diseases", () => {
  it("Render content", () => {
    expect.assertions(4);

    render(<EditDiseases visible />);

    const title = screen.queryByText("Enfermedades");
    expect(title).toBeOnTheScreen();
    const epocLabel = screen.queryByText("Epoc");
    expect(epocLabel).toBeOnTheScreen();
    const hypertensionLabel = screen.queryByText("Hipertensión");
    expect(hypertensionLabel).toBeOnTheScreen();
    const saveBtn = screen.queryByText("Guardar");
    expect(saveBtn).toBeOnTheScreen();
  });

  it("Save data", () => {
    expect.assertions(2);

    const onSave = jest.fn();
    render(<EditDiseases onSave={onSave} visible />);

    const epocLabel = screen.getByText("Epoc");
    const saveBtn = screen.getByText("Guardar");

    fireEvent.press(saveBtn);
    expect(onSave).toHaveBeenCalledTimes(0);
    fireEvent.press(epocLabel);
    fireEvent.press(saveBtn);
    expect(onSave).toHaveBeenCalledTimes(1);
  });
});
