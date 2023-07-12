import { fireEvent, render, screen } from "@testing-library/react-native";

import { signInApple, signInGoogle } from "utils/auth";

import { Providers } from ".";
import { t } from "./translations";

describe("Authentication/Providers", () => {
  const buttons = [t().signInWith.apple, t().signInWith.google];

  beforeEach(() => {
    render(<Providers />);
  });

  it("Render properly", () => {
    expect.assertions(2);

    buttons.forEach((button) => {
      expect(screen.queryByText(button)).toBeOnTheScreen();
    });
  });

  it("Sign in", () => {
    expect.assertions(2);

    buttons.forEach((button) => {
      fireEvent.press(screen.getByText(button));
    });

    expect(signInApple).toHaveBeenCalled();
    expect(signInGoogle).toHaveBeenCalled();
  });
});
