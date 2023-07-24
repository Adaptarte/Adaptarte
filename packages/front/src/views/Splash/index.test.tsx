import { render, screen } from "@testing-library/react-native";

import { Splash } from ".";

describe("Splash", () => {
  it("Render content", () => {
    expect.assertions(2);
    render(<Splash />);

    const text = screen.queryByText("Adaptarte");
    expect(text).toBeOnTheScreen();

    const img = screen.queryByTestId("img-care");
    expect(img).toBeOnTheScreen();
  });
});
