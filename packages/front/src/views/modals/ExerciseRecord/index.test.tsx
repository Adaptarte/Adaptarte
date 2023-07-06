import { fireEvent, render, screen } from "@testing-library/react-native";

import { ExerciseRecord } from ".";
import { t } from "./translations";

describe("ExerciseRecord", () => {
  it("Render content", () => {
    expect.assertions(4);
    render(<ExerciseRecord visible />);

    expect(
      screen.queryByPlaceholderText(t().activity.placeholder)
    ).toBeOnTheScreen();
    expect(
      screen.queryByPlaceholderText(t().duration.placeholder)
    ).toBeOnTheScreen();
    expect(screen.queryByText(t().date)).toBeOnTheScreen();
    expect(screen.queryByText(t().save)).toBeOnTheScreen();
  });

  it("Save data", () => {
    expect.assertions(1);
    const onSave = jest.fn();
    render(<ExerciseRecord onSave={onSave} visible />);

    const activityInput = screen.getByPlaceholderText(t().activity.placeholder);
    const durationInput = screen.getByPlaceholderText(t().duration.placeholder);
    const saveButton = screen.getByText(t().save);

    fireEvent.changeText(activityInput, "Caminata");
    fireEvent.changeText(durationInput, "12");
    fireEvent.press(saveButton);
    expect(onSave).toHaveBeenCalledTimes(1);
  });

  describe("It's not filled properly", () => {
    it("Not save data", () => {
      expect.assertions(1);
      const onSave = jest.fn();
      render(<ExerciseRecord onSave={onSave} visible />);

      const activityInput = screen.getByPlaceholderText(
        t().activity.placeholder
      );
      const durationInput = screen.getByPlaceholderText(
        t().duration.placeholder
      );
      const saveButton = screen.getByText(t().save);

      fireEvent.press(saveButton);

      fireEvent.changeText(activityInput, "");
      fireEvent.changeText(durationInput, 10);
      fireEvent.press(saveButton);

      fireEvent.changeText(activityInput, "Biclicleta");
      fireEvent.changeText(durationInput, ".");
      fireEvent.press(saveButton);

      expect(onSave).not.toHaveBeenCalled();
    });
  });
});
