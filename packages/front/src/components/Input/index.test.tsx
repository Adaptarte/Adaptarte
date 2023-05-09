import { fireEvent, render, screen } from "@testing-library/react-native";
import { useState } from "react";

import { Input } from ".";

describe("Input", () => {
  it("Render Input", () => {
    expect.assertions(2);
    render(<Input label={"Name"} placeholder={"John"} />);

    const label = screen.queryByText("Name");
    expect(label).toBeOnTheScreen();
    const input = screen.queryByPlaceholderText("John");
    expect(input).toBeOnTheScreen();
  });

  it("Call onChange", () => {
    expect.assertions(2);

    const ControlledInput = (): JSX.Element => {
      const [value, setValue] = useState("");

      return <Input onChange={setValue} placeholder={"John"} value={value} />;
    };

    render(<ControlledInput />);

    const input = screen.getByPlaceholderText("John");
    expect(input.props.value).toBe("");
    fireEvent.changeText(input, "Doe");
    expect(input.props.value).toBe("Doe");
  });
});
