import { act, fireEvent, render, screen } from "@testing-library/react-native";
import { useReducer } from "react";

import { Button } from "components/Button";

import { Notice } from ".";

describe("Notice", () => {
  it("Render content", () => {
    expect.assertions(3);

    render(
      <Notice onConfirm={jest.fn()} description={"Hello world!"} visible />,
    );

    const description = screen.queryByText("Hello world!");
    expect(description).toBeOnTheScreen();
    const buttonRejection = screen.queryByText("No");
    expect(buttonRejection).toBeOnTheScreen();
    const buttonAceptation = screen.queryByText("Si");
    expect(buttonAceptation).toBeOnTheScreen();
  });

  it("Close modal", async () => {
    expect.assertions(2);

    const NoticeTest = (): JSX.Element => {
      const [visible, toggleVisible] = useReducer((val) => !val, false);
      return (
        <>
          <Notice
            onConfirm={jest.fn()}
            description={"Hello world!"}
            setVisible={toggleVisible}
            visible={visible}
          />
          <Button onPress={toggleVisible}>{"Show notice"}</Button>
        </>
      );
    };
    render(<NoticeTest />);

    expect(screen.queryByText("Hello world!")).not.toBeOnTheScreen();
    const button = screen.getByText("Show notice");

    await act(() => {
      fireEvent.press(button);
    });

    expect(screen.queryByText("Hello world!")).toBeOnTheScreen();
    const buttonRejection = screen.queryByText("No");
    expect(buttonRejection).toBeOnTheScreen();
  });
});
