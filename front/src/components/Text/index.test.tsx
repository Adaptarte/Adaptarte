import { render, screen } from "@testing-library/react-native";

import { Text } from ".";

describe("Text", () => {
  it("Renders text", () => {
    expect.assertions(1);
    render(<Text>{"ExampleText"}</Text>);

    const text = screen.queryByText("ExampleText");
    expect(text).toBeOnTheScreen();
  });
});
