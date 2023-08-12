import { fireEvent, render, screen } from "@testing-library/react-native";

import { DailyHabits } from ".";
import { t } from "./translations";

describe("DailyHabits", () => {
  let navigate: jest.Mock;
  const texts = [t().calm, t().exercise, t().feeding, t().hydration];

  beforeEach(() => {
    navigate = jest.fn();
    render(<DailyHabits navigate={navigate} />);
  });

  it("Render properly", () => {
    expect.assertions(4);

    texts.forEach((text) => {
      expect(screen.queryByText(text)).toBeOnTheScreen();
    });
  });

  it("Navigate to other screens", () => {
    expect.assertions(5);

    texts.forEach((text) => {
      fireEvent.press(screen.getByText(text));
    });

    const expCalls = ["Calm", "Exercise", "Feeding", "Hydration"];
    expect(navigate).toHaveBeenCalledTimes(expCalls.length);
    expCalls.forEach((expCall, idx) => {
      expect(navigate).toHaveBeenNthCalledWith(idx + 1, expCall);
    });
  });
});
