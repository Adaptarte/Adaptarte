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
      </Modal>
    );

    const title = screen.queryByText("Congrats");
    expect(title).toBeOnTheScreen();
    const text = screen.queryByText("You're awesome");
    expect(text).toBeOnTheScreen();
    const closeImg = screen.queryByA11yValue({ text: "close" });
    expect(closeImg).toBeOnTheScreen();
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
    const closeImg = screen.getByA11yValue({ text: "close" });
    await act(() => {
      fireEvent.press(closeImg);
    });
    expect(screen.queryByText("Congrats")).not.toBeOnTheScreen();
  });
});
