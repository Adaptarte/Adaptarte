import { fireEvent, render, screen } from "@testing-library/react-native";

import { TensionRecord } from ".";

describe("Tension", () => {
  it("Render content", () => {
    expect.assertions(3);
    const onSave = jest.fn();
    render(<TensionRecord onSave={onSave} visible />);

    const diastolicInput = screen.queryByPlaceholderText("80");
    expect(diastolicInput).toBeOnTheScreen();
    const systolicInput = screen.queryByPlaceholderText("120");
    expect(systolicInput).toBeOnTheScreen();
    const saveBtn = screen.queryByText("Registrar");
    expect(saveBtn).toBeOnTheScreen();
  });

  it("Save data", () => {
    expect.assertions(2);
    const onSave = jest.fn();
    render(<TensionRecord onSave={onSave} visible />);

    const saveButton = screen.getByText("Registrar");
    fireEvent.press(saveButton);
    expect(onSave).toHaveBeenCalledTimes(0);

    const diastolicInput = screen.getByPlaceholderText("80");
    const systolicInput = screen.getByPlaceholderText("120");

    fireEvent.changeText(diastolicInput, "79");
    fireEvent.changeText(systolicInput, "119");
    fireEvent.press(saveButton);
    expect(onSave).toHaveBeenCalledTimes(1);
  });
});
