import { fireEvent, render, screen } from "@testing-library/react";
import React, { useReducer } from "react";

import { Modal } from ".";
import { t } from "./translations";

describe("components/Modal", () => {
  const title = "Alert";
  const message = "Important notice!";

  const TestModal = (): JSX.Element => {
    const [visible, setVisible] = useReducer((val) => !val, true);

    return (
      <Modal onClose={setVisible} title={title} visible={visible}>
        <p>{message}</p>
      </Modal>
    );
  };

  beforeEach(() => {
    render(<TestModal />);
  });

  it("Show title & content", () => {
    expect.assertions(3);
    expect(screen.queryByText(title)).toBeInTheDocument();
    expect(screen.queryByText(t().close)).toBeInTheDocument();
    expect(screen.queryByText(message)).toBeInTheDocument();
  });

  it("Close", () => {
    expect.assertions(3);

    fireEvent.click(screen.getByText(t().close));
    expect(screen.queryByText(title)).not.toBeInTheDocument();
    expect(screen.queryByText(t().close)).not.toBeInTheDocument();
    expect(screen.queryByText(message)).not.toBeInTheDocument();
  });
});
