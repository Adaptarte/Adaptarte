import { render, screen } from "@testing-library/react-native";

import { DatePicker } from ".";

describe("DatePicker", () => {
  it("Renders content", () => {
    expect.assertions(2);
    render(<DatePicker date={new Date()} label={"Event day"} />);

    const label = screen.queryByText("Event day");
    expect(label).toBeOnTheScreen();
    expect(screen.root.children).toHaveLength(2);
  });
});
