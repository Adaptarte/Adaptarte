import { render, screen } from "@testing-library/react-native";

import { Tag } from ".";

describe("Tag", () => {
  it("Render content", () => {
    expect.assertions(1);

    render(<Tag>{"Hypertension"}</Tag>);

    const tag = screen.queryByText("Hypertension");
    expect(tag).toBeOnTheScreen();
  });
});
