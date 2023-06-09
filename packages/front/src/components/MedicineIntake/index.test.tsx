import { fireEvent, render, screen } from "@testing-library/react-native";

import { getRecipeById } from "utils/medicine";

import { MedicineIntake } from ".";

describe("MedicineIntake", () => {
  const recipe = getRecipeById(1);

  it("Render content", () => {
    expect.assertions(2);
    const onSave = jest.fn();
    render(<MedicineIntake onSave={onSave} recipe={recipe} visible />);

    const text = screen.queryByText(`Medicina: ${recipe.medicine}`);
    expect(text).toBeOnTheScreen();
    const saveBtn = screen.queryByText("Registrar");
    expect(saveBtn).toBeOnTheScreen();
  });

  it("Save data", () => {
    expect.assertions(1);
    const onSave = jest.fn();
    render(<MedicineIntake onSave={onSave} recipe={recipe} visible />);

    const saveButton = screen.getByText("Registrar");
    fireEvent.press(saveButton);
    expect(onSave).toHaveBeenCalledTimes(1);
  });
});
