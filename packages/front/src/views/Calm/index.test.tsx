import { render, screen } from "@testing-library/react-native";

import { Calm } from ".";
import { t } from "./translations";
import { activities } from "./types";

describe("Calm", () => {
  beforeEach(() => {
    render(<Calm />);
  });

  it("Render properly", () => {
    expect.assertions(6 + activities.length);

    const texts = [
      t().stress.title,
      t().stress.whatIs,
      t().stress.consequences,
      t().calm.title,
      t().calm.content
    ];
    texts.forEach((text) => {
      expect(screen.queryByText(text)).toBeOnTheScreen();
    });
    activities.forEach((activity) => {
      expect(screen.queryByText(t().activities[activity])).toBeOnTheScreen();
    });
    expect(screen.queryByTestId("img-calm")).toBeOnTheScreen();
  });
});
