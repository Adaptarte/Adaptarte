import { fireEvent, render, screen } from "@testing-library/react-native";

import { Authentication } from ".";
import { t } from "./translations";

describe("Authentication", () => {
  beforeEach(() => {
    render(<Authentication />);
  });

  it("Render properly", () => {
    expect.assertions(4);

    expect(screen.queryByText(t().title)).toBeOnTheScreen();
    expect(screen.queryByTestId("img-care")).toBeOnTheScreen();
    expect(screen.queryByText(t().signIn)).not.toBeOnTheScreen();
    expect(screen.queryByText(t().signUp)).toBeOnTheScreen();
  });

  it("Toggle sign-in & sign-up", () => {
    expect.assertions(4);

    fireEvent.press(screen.getByText(t().signUp));
    expect(screen.queryByText(t().signIn)).toBeOnTheScreen();
    expect(screen.queryByText(t().signUp)).not.toBeOnTheScreen();

    fireEvent.press(screen.getByText(t().signIn));
    expect(screen.queryByText(t().signIn)).not.toBeOnTheScreen();
    expect(screen.queryByText(t().signUp)).toBeOnTheScreen();
  });
});
