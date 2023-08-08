import { fireEvent, render, screen } from "@testing-library/react-native";

import { Habit } from ".";

describe("Habit", () => {
  it("Renders content", () => {
    expect.assertions(1);
    render(
      <Habit bgColor={"ORANGE_TRANSLUCID"} color={"ORANGE"} img={"exercise"}>
        {"Exercise"}
      </Habit>,
    );

    const text = screen.queryByText("Exercise");
    expect(text).toBeOnTheScreen();
  });

  it("Renders content", () => {
    expect.assertions(1);
    const onPress = jest.fn();
    render(
      <Habit bgColor={"BLUE"} color={"BLUE"} img={"exercise"} onPress={onPress}>
        {"Exercise"}
      </Habit>,
    );

    fireEvent.press(screen.getByText("Exercise"));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
