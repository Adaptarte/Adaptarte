import { NavigationContainer } from "@react-navigation/native";
import { fireEvent, render, screen } from "@testing-library/react-native";

import { TensionRecord } from ".";
import { t } from "./translations";

describe("Tension", () => {
  let onSave: jest.Mock;

  beforeEach(() => {
    onSave = jest.fn();
    render(
      <NavigationContainer>
        <TensionRecord onSave={onSave} visible />
      </NavigationContainer>
    );
  });

  it("Render content", () => {
    expect.assertions(4);

    expect(
      screen.queryByPlaceholderText(t().diastolic.placeholder)
    ).toBeOnTheScreen();
    expect(
      screen.queryByPlaceholderText(t().systolic.placeholder)
    ).toBeOnTheScreen();
    expect(screen.queryByText(t().date)).toBeOnTheScreen();
    expect(screen.queryByText(t().save)).toBeOnTheScreen();
  });

  it("Save data", () => {
    expect.assertions(1);

    const diastolicInput = screen.getByPlaceholderText(
      t().diastolic.placeholder
    );
    const systolicInput = screen.getByPlaceholderText(t().systolic.placeholder);
    const saveButton = screen.getByText(t().save);

    fireEvent.changeText(diastolicInput, "79");
    fireEvent.changeText(systolicInput, "119");
    fireEvent.press(saveButton);
    expect(onSave).toHaveBeenCalledTimes(1);
  });

  it("Not save incorrect data", () => {
    expect.assertions(1);

    const diastolicInput = screen.getByPlaceholderText(
      t().diastolic.placeholder
    );
    const systolicInput = screen.getByPlaceholderText(t().systolic.placeholder);
    const saveButton = screen.getByText(t().save);

    fireEvent.press(saveButton);

    fireEvent.changeText(diastolicInput, "79");
    fireEvent.changeText(systolicInput, ".");
    fireEvent.press(saveButton);

    fireEvent.changeText(diastolicInput, ".");
    fireEvent.changeText(systolicInput, "119");
    fireEvent.press(saveButton);

    expect(onSave).not.toHaveBeenCalled();
  });

  it("Show abnormal values alert", () => {
    expect.assertions(2);

    fireEvent.changeText(
      screen.getByPlaceholderText(t().diastolic.placeholder),
      "81"
    );
    fireEvent.changeText(
      screen.getByPlaceholderText(t().systolic.placeholder),
      "121"
    );
    expect(
      screen.queryByTestId("icon-exclamation-circle")
    ).not.toBeOnTheScreen();
    fireEvent.press(screen.getByText(t().save));
    expect(screen.queryByTestId("icon-exclamation-circle")).toBeOnTheScreen();
  });
});
