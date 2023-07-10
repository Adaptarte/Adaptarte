import { fireEvent, render, screen } from "@testing-library/react-native";

import { getRecipeById } from "utils/medicine";

import { MedicineIntakeRecord } from ".";
import { t } from "./translations";

describe("MedicineIntake", () => {
  const recipe = getRecipeById("1");
  let onSave: jest.Mock;

  beforeEach(() => {
    onSave = jest.fn();
    render(<MedicineIntakeRecord onSave={onSave} recipe={recipe} visible />);
  });

  it("Render content", () => {
    expect.assertions(2);

    const text = screen.queryByText(`${t().medicine}: ${recipe.data.medicine}`);
    expect(text).toBeOnTheScreen();
    const saveBtn = screen.queryByText(t().save);
    expect(saveBtn).toBeOnTheScreen();
  });

  it("Save data", () => {
    expect.assertions(1);

    const saveButton = screen.getByText(t().save);
    fireEvent.press(saveButton);
    expect(onSave).toHaveBeenCalledTimes(1);
  });
});
