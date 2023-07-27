/* eslint-disable @typescript-eslint/unbound-method */
import Notifee from "@notifee/react-native";
import { fireEvent, render, screen } from "@testing-library/react-native";
import { act } from "react-test-renderer";

import { NotificationsPermission } from ".";
import { t } from "./translations";

describe("NotificationsPermission", () => {
  beforeEach(() => {
    render(<NotificationsPermission />);
  });

  it("Render properly", () => {
    expect.assertions(2);

    expect(screen.queryByText(t().message)).toBeOnTheScreen();
    expect(screen.queryByText(t().accept)).toBeOnTheScreen();
  });

  it("Handle permission", async () => {
    expect.assertions(1);

    await act(async () => {
      fireEvent.press(screen.getByText(t().accept));
    });
    expect(Notifee.requestPermission).toHaveBeenCalledTimes(1);
  });
});
