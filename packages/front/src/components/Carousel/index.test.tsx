import { fireEvent, render, screen } from "@testing-library/react-native";

import { data } from "views/Exercise/data";

import { Carousel } from ".";

describe("Carousel", () => {
  it("Renders Content", () => {
    expect.assertions(1 + data.length * 2);
    render(<Carousel data={data} />);

    expect(screen.queryByText(">")).toBeOnTheScreen();
    const nextBtn = screen.getByText(">");

    data.forEach(({ description, title }) => {
      expect(screen.queryByText(description)).toBeOnTheScreen();
      expect(screen.queryByText(title)).toBeOnTheScreen();
      fireEvent.press(nextBtn);
    });
  });
});
