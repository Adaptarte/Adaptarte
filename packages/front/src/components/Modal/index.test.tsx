import { fireEvent, render, screen } from "@testing-library/react-native";
import { useReducer } from "react";
import { act } from "react-test-renderer";

import { Button } from "components/Button";
import { Text } from "components/Text";

import { Modal } from ".";

describe("Modal", () => {
  it("Render content", () => {
    expect.assertions(3);

    render(
      <Modal title={"Congrats"} visible>
        <Text>{"You're awesome"}</Text>
      </Modal>,
    );

    const title = screen.queryByText("Congrats");
    expect(title).toBeOnTheScreen();
    const text = screen.queryByText("You're awesome");
    expect(text).toBeOnTheScreen();
    const closeBtn = screen.queryByTestId("icon-times");
    expect(closeBtn).toBeOnTheScreen();
  });

  it("Be toggleable", async () => {
    expect.assertions(3);

    const ModalTest = (): JSX.Element => {
      const [visible, toggleVisible] = useReducer((val) => !val, false);

      return (
        <>
          <Modal
            setVisible={toggleVisible}
            title={"Congrats"}
            visible={visible}
          >
            <Text>{"You're awesome"}</Text>
          </Modal>
          <Button onPress={toggleVisible}>{"Show modal"}</Button>
        </>
      );
    };
    render(<ModalTest />);

    expect(screen.queryByText("Congrats")).not.toBeOnTheScreen();
    const button = screen.getByText("Show modal");

    await act(() => {
      fireEvent.press(button);
    });

    expect(screen.queryByText("Congrats")).toBeOnTheScreen();
    const closeBtn = screen.getByTestId("icon-times");
    await act(() => {
      fireEvent.press(closeBtn);
    });
    expect(screen.queryByText("Congrats")).not.toBeOnTheScreen();
  });
});
