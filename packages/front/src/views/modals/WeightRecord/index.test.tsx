import { fireEvent, render, screen } from "@testing-library/react-native";

import { WeightRecord } from ".";
import { t } from "./translations";

describe("WeightRecord", () => {
  it("Render content", () => {
    expect.assertions(3);
    render(<WeightRecord visible />);

    expect(
      screen.queryByPlaceholderText(t().weight.placeholder),
    ).toBeOnTheScreen();
    expect(screen.queryByText(t().date)).toBeOnTheScreen();
    expect(screen.queryByText(t().save)).toBeOnTheScreen();
  });

  it("Save data", () => {
    expect.assertions(1);
    const onSave = jest.fn();
    render(<WeightRecord onSave={onSave} visible />);

    const kgInput = screen.getByPlaceholderText(t().weight.placeholder);
    const saveBtn = screen.getByText(t().save);

    fireEvent.changeText(kgInput, "61.2");
    fireEvent.press(saveBtn);
    expect(onSave).toHaveBeenCalledTimes(1);
  });

  it("It's not filled properly", () => {
    expect.assertions(2);
    const onSave = jest.fn();
    render(<WeightRecord onSave={onSave} visible />);

    const kgInput = screen.getByPlaceholderText(t().weight.placeholder);
    const saveBtn = screen.getByText(t().save);

    fireEvent.press(saveBtn);
    expect(onSave).toHaveBeenCalledTimes(0);

    fireEvent.changeText(kgInput, ".");
    fireEvent.press(saveBtn);
    expect(onSave).toHaveBeenCalledTimes(0);
  });
});
