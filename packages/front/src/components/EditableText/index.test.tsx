import { fireEvent, render, screen } from "@testing-library/react-native";

import { EditableText } from ".";
import { useState } from "react";

describe("EditableText", () => {
  const DemoEditableText = (): JSX.Element => {
    const [text, setText] = useState("123");

    return <EditableText onChange={setText} placeholder={"id"} value={text} />;
  };

  beforeEach(() => {
    render(<DemoEditableText />);
  });

  it("Render properly", () => {
    expect.assertions(4);

    expect(screen.queryByText("123")).toBeOnTheScreen();
    expect(screen.queryByTestId("icon-edit")).toBeOnTheScreen();
    expect(screen.queryByPlaceholderText("id")).not.toBeOnTheScreen();
    expect(screen.queryByTestId("icon-save")).not.toBeOnTheScreen();
  });

  it("Switch content", () => {
    expect.assertions(4);

    fireEvent.press(screen.getByTestId("icon-edit"));
    expect(screen.queryByText("123")).not.toBeOnTheScreen();
    expect(screen.queryByTestId("icon-edit")).not.toBeOnTheScreen();
    expect(screen.queryByPlaceholderText("id")).toBeOnTheScreen();
    expect(screen.queryByTestId("icon-save")).toBeOnTheScreen();
  });

  it("Be editable", () => {
    expect.assertions(2);

    expect(screen.queryByText("321")).not.toBeOnTheScreen();

    fireEvent.press(screen.getByTestId("icon-edit"));
    fireEvent.changeText(screen.getByPlaceholderText("id"), "321");
    fireEvent.press(screen.getByTestId("icon-save"));
    expect(screen.queryByText("321")).toBeOnTheScreen();
  });
});
