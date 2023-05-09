import { fireEvent, render, screen } from "@testing-library/react-native";

import { DailyGoal } from ".";

describe("DailyGoal", () => {
  it("Renders DailyGoal", () => {
    expect.assertions(1);
    render(<DailyGoal date={new Date(0)} done title={"ToDo"} type={"Pill"} />);

    const title = screen.queryByText("ToDo");
    expect(title).toBeOnTheScreen();
  });

  it("Call onPress", () => {
    expect.assertions(1);
    const onPress = jest.fn();
    render(
      <DailyGoal
        date={new Date(0)}
        done={false}
        onPress={onPress}
        title={"ToDo"}
        type={"Record"}
      />
    );

    fireEvent.press(screen.getByText("ToDo"));
    expect(onPress).toHaveBeenCalled();
  });

  it("Be disabled", () => {
    expect.assertions(1);
    const onPress = jest.fn();
    render(
      <DailyGoal
        date={new Date(0)}
        done
        onPress={onPress}
        title={"ToDo"}
        type={"Pill"}
      />
    );

    fireEvent.press(screen.getByText("ToDo"));
    expect(onPress).not.toHaveBeenCalled();
  });
});
