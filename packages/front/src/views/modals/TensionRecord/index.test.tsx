import { fireEvent, render, screen } from "@testing-library/react-native";

import { TensionRecord } from ".";
import { t } from "./translations";

describe("Tension", () => {
  it("Render content", () => {
    expect.assertions(4);
    const onSave = jest.fn();
    render(<TensionRecord onSave={onSave} visible />);

    expect(
      screen.queryByPlaceholderText(t().diastolic.placeholder)
    ).toBeOnTheScreen();
    expect(
      screen.queryByPlaceholderText(t().systolic.placeholder)
    ).toBeOnTheScreen();
    expect(screen.queryByText(t().date)).toBeOnTheScreen();
    expect(screen.queryByText(t().save)).toBeOnTheScreen();
  });

  it("Save data", () => {
    expect.assertions(1);
    const onSave = jest.fn();
    render(<TensionRecord onSave={onSave} visible />);

    const diastolicInput = screen.getByPlaceholderText(
      t().diastolic.placeholder
    );
    const systolicInput = screen.getByPlaceholderText(t().systolic.placeholder);
    const saveButton = screen.getByText(t().save);

    fireEvent.changeText(diastolicInput, "79");
    fireEvent.changeText(systolicInput, "119");
    fireEvent.press(saveButton);
    expect(onSave).toHaveBeenCalledTimes(1);
  });

  it("Not save incorrect data", () => {
    expect.assertions(1);
    const onSave = jest.fn();
    render(<TensionRecord onSave={onSave} visible />);

    const diastolicInput = screen.getByPlaceholderText(
      t().diastolic.placeholder
    );
    const systolicInput = screen.getByPlaceholderText(t().systolic.placeholder);
    const saveButton = screen.getByText(t().save);

    fireEvent.press(saveButton);

    fireEvent.changeText(diastolicInput, "79");
    fireEvent.changeText(systolicInput, ".");
    fireEvent.press(saveButton);

    fireEvent.changeText(diastolicInput, ".");
    fireEvent.changeText(systolicInput, "119");
    fireEvent.press(saveButton);

    expect(onSave).not.toHaveBeenCalled();
  });
});
