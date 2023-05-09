import { fireEvent, render, screen } from "@testing-library/react-native";

import { CheckBox } from ".";

describe("CheckBox", () => {
  it("Renders CheckBox", () => {
    expect.assertions(1);
    render(<CheckBox label={"Toggle"} variant={{ border: "circle" }} />);

    const label = screen.queryByText("Toggle");
    expect(label).toBeOnTheScreen();
  });

  it("Call onChange", () => {
    expect.assertions(1);
    const onChange = jest.fn();
    render(<CheckBox label={"Toggle"} onChange={onChange} />);

    fireEvent.press(screen.getByText("Toggle"));
    expect(onChange).toHaveBeenCalled();
  });

  it("Be disabled", () => {
    expect.assertions(1);
    const onChange = jest.fn();
    render(<CheckBox disabled label={"Toggle"} onChange={onChange} />);

    fireEvent.press(screen.getByText("Toggle"));
    expect(onChange).not.toHaveBeenCalled();
  });
});
