import { fireEvent, render, screen } from "@testing-library/react-native";

import type { TAppViewProps } from "navigation/App/types";

import { Landing } from ".";
import { t } from "./translations";

describe("Landing", () => {
  type Nav = TAppViewProps<"Landing">["navigation"];
  let navigation: Partial<Nav>;
  beforeEach(() => {
    navigation = { navigate: jest.fn() };
    render(
      <Landing
        navigation={navigation as Nav}
        route={{ key: "Landing", name: "Landing" }}
      />,
    );
  });

  it("Render properly", () => {
    expect.assertions(4);

    expect(screen.queryByText(t().dailyGoals)).toBeOnTheScreen();
    expect(screen.queryByText(t().dailyHabits)).toBeOnTheScreen();
    expect(screen.queryByText(`¡${t().welcome}, John!`)).toBeOnTheScreen();
    expect(screen.queryByTestId("icon-user-circle")).toBeOnTheScreen();
  });

  it("Navigate to other screens", () => {
    expect.assertions(2);

    fireEvent.press(screen.getByTestId("icon-user-circle"));
    expect(navigation.navigate).toHaveBeenLastCalledWith("Profile");
    expect(navigation.navigate).toHaveBeenCalledTimes(1);
  });
});
