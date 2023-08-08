import { fireEvent, render, screen } from "@testing-library/react-native";

import type { TAppViewProps } from "navigation/App/types";

import { Profile } from ".";
import { t } from "./translations";

describe("Profile", () => {
  type Nav = TAppViewProps<"Profile">["navigation"];
  let navigation: Partial<Nav>;
  beforeEach(() => {
    navigation = { navigate: jest.fn() };
    render(
      <Profile
        navigation={navigation as Nav}
        route={{ key: "Profile", name: "Profile" }}
      />,
    );
  });

  it("Render properly", () => {
    expect.assertions(2);

    expect(screen.queryByText(t().panic)).toBeOnTheScreen();
    expect(screen.queryByText("Cerrar sesión")).toBeOnTheScreen();
  });

  it("Navigate to other screens", () => {
    expect.assertions(2);

    fireEvent.press(screen.getByText(t().panic));
    expect(navigation.navigate).toHaveBeenLastCalledWith("Panic");
    expect(navigation.navigate).toHaveBeenCalledTimes(1);
  });
});
