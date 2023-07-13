import { fireEvent, render, screen } from "@testing-library/react-native";

import { arr } from "utils/array";
import { signUpEmailPassword } from "utils/auth";

import { SignUp } from ".";
import { t } from "./translations";

describe("Sign up", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    render(<SignUp />);
  });

  it("Render properly", () => {
    expect.assertions(5);

    expect(screen.queryByText(t().title)).toBeOnTheScreen();
    expect(screen.queryByText(t().signUp)).toBeOnTheScreen();
    expect(screen.queryByPlaceholderText(t().email)).toBeOnTheScreen();
    expect(screen.queryByPlaceholderText(t().password)).toBeOnTheScreen();
    expect(screen.queryByPlaceholderText(t().username)).toBeOnTheScreen();
  });

  it("Sign up", () => {
    expect.assertions(1);

    fireEvent.changeText(
      screen.getByPlaceholderText(t().email),
      "john@email.com"
    );
    fireEvent.changeText(screen.getByPlaceholderText(t().password), "secret");
    fireEvent.changeText(screen.getByPlaceholderText(t().username), "John Doe");
    fireEvent.press(screen.getByText(t().signUp));
    expect(signUpEmailPassword).toHaveBeenCalledTimes(1);
  });

  it("Disable button", () => {
    expect.assertions(1);

    const emailInput = screen.getByPlaceholderText(t().email);
    const passwordInput = screen.getByPlaceholderText(t().password);
    const usernameInput = screen.getByPlaceholderText(t().username);
    const signUpBtn = screen.getByText(t().signUp);
    fireEvent.press(signUpBtn);

    arr(3).forEach((val) => {
      fireEvent.changeText(emailInput, val === 0 ? "" : "john@email.com");
      fireEvent.changeText(passwordInput, val === 1 ? "" : "secret");
      fireEvent.changeText(usernameInput, val === 2 ? "" : "John Doe");
      fireEvent.press(signUpBtn);
    });

    expect(signUpEmailPassword).not.toHaveBeenCalled();
  });
});
