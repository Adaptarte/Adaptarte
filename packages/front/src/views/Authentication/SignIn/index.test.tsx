import { fireEvent, render, screen } from "@testing-library/react-native";

import { signInEmailPassword } from "utils/auth";

import { SignIn } from ".";
import { t } from "./translations";

describe("Sign in", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    render(<SignIn />);
  });

  it("Render properly", () => {
    expect.assertions(4);

    expect(screen.queryByText(t().title)).toBeOnTheScreen();
    expect(screen.queryByText(t().signIn)).toBeOnTheScreen();
    expect(screen.queryByPlaceholderText(t().email)).toBeOnTheScreen();
    expect(screen.queryByPlaceholderText(t().password)).toBeOnTheScreen();
  });

  it("Sign in", () => {
    expect.assertions(1);

    const emailInput = screen.getByPlaceholderText(t().email);
    const passwordInput = screen.getByPlaceholderText(t().password);

    fireEvent.changeText(emailInput, "john@email.com");
    fireEvent.changeText(passwordInput, "secret");
    fireEvent.press(screen.getByText(t().signIn));
    expect(signInEmailPassword).toHaveBeenCalledTimes(1);
  });

  it("Disable button", () => {
    expect.assertions(1);

    const emailInput = screen.getByPlaceholderText(t().email);
    const passwordInput = screen.getByPlaceholderText(t().password);
    const signInBtn = screen.getByText(t().signIn);

    fireEvent.press(signInBtn);

    fireEvent.changeText(emailInput, "john@email.com");
    fireEvent.changeText(passwordInput, "");
    fireEvent.press(signInBtn);

    fireEvent.changeText(emailInput, "");
    fireEvent.changeText(passwordInput, "secret");
    fireEvent.press(signInBtn);

    expect(signInEmailPassword).not.toHaveBeenCalled();
  });
});
