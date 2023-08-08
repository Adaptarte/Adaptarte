import { render, screen } from "@testing-library/react-native";

import { Text } from "components/Text";

import { ComingSoon } from ".";

describe("Coming Soon", () => {
  it("Renders Content", () => {
    expect.assertions(2);
    render(
      <ComingSoon>
        <Text>{"Feature"}</Text>
      </ComingSoon>,
    );

    const text = screen.queryByText("Feature");
    expect(text).toBeOnTheScreen();
    const msg = screen.queryByText("Próximamente");
    expect(msg).toBeOnTheScreen();
  });
});
