import { fireEvent, render, screen } from "@testing-library/react-native";

import { Text } from "components/Text";

import { Button } from ".";

describe("Button", () => {
  it("Renders Button", () => {
    expect.assertions(1);
    render(<Button variant={{ style: "solid" }}>{"Press"}</Button>);

    const text = screen.queryByText("Press");
    expect(text).toBeOnTheScreen();
  });

  it("Call onPress", () => {
    expect.assertions(1);
    const onPress = jest.fn();
    render(<Button onPress={onPress}>{"Press"}</Button>);

    fireEvent.press(screen.getByText("Press"));
    expect(onPress).toHaveBeenCalled();
  });

  it("Be disabled", () => {
    expect.assertions(1);
    const onPress = jest.fn();
    render(
      <Button disabled onPress={onPress}>
        <Text>{"Press"}</Text>
      </Button>,
    );

    fireEvent.press(screen.getByText("Press"));
    expect(onPress).not.toHaveBeenCalled();
  });
});
