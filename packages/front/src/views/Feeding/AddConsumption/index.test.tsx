import { fireEvent, render, screen } from "@testing-library/react-native";

import { AddConsumption } from ".";

describe("AddConsumption", () => {
  let onPress: jest.Mock;

  beforeEach(() => {
    onPress = jest.fn();
    render(<AddConsumption onPress={onPress} />);
  });

  it("Render properly", () => {
    expect.assertions(1);

    expect(screen.queryByTestId("icon-plus")).toBeOnTheScreen();
  });

  it("Be pressable", () => {
    expect.assertions(1);

    fireEvent.press(screen.getByTestId("icon-plus"));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
