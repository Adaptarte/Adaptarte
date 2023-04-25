import { render, screen } from "@testing-library/react-native";

import { Screen } from ".";
import { Text } from "components/Text";

describe("Screen", () => {
  it("Renders Screen", () => {
    expect.assertions(1);
    render(
      <Screen>
        <Text>{"Dummy"}</Text>
      </Screen>
    );

    const text = screen.queryByText("Dummy");
    expect(text).toBeOnTheScreen();
  });
});
