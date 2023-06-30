import { render, screen } from "@testing-library/react-native";

import { Icon } from ".";

describe("Icon", () => {
  it("Render icon", () => {
    expect.assertions(1);
    render(<Icon name={"plus"} />);

    const icon = screen.queryByTestId("icon-plus");
    expect(icon).toBeOnTheScreen();
  });
});
