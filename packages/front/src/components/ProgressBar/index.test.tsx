import { render, screen } from "@testing-library/react-native";

import { ProgressBar } from ".";

describe("ProgressBar", () => {
  it("Render ProgressBar", () => {
    expect.assertions(2);
    render(<ProgressBar total={0} value={0} />);

    const container = screen.queryByTestId("progress_container");
    expect(container).toBeOnTheScreen();
    const bar = screen.queryByTestId("progress_bar");
    expect(bar).toBeOnTheScreen();
  });
});
