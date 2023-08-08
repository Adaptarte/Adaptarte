import { fireEvent, render, screen } from "@testing-library/react-native";

import { data } from "views/Exercise/data";

import { Carousel } from ".";
import { CarouselCard } from "./CarouselCard";

describe("Carousel", () => {
  it("Renders Carousel", () => {
    expect.assertions(7);
    render(
      <Carousel
        check={false}
        data={data}
        onSave={function (): void {
          throw new Error("Function not implemented.");
        }}
      />,
    );

    expect(screen.queryByText(">")).toBeOnTheScreen();
    const nextBtn = screen.getByText(">");

    data.forEach(({ description, title }) => {
      expect(screen.queryByText(description)).toBeOnTheScreen();
      expect(screen.queryByText(title)).toBeOnTheScreen();
      fireEvent.press(nextBtn);
    });
  });

  it("Render CarouselCard", () => {
    expect.assertions(1);
    render(
      <CarouselCard
        {...data[0]}
        complete={false}
        onSave={function (): void {
          throw new Error("Function not implemented.");
        }}
      />,
    );

    expect(screen.getByText("Por completar")).toBeOnTheScreen();
  });

  it("Checkbox be disabled", () => {
    expect.assertions(1);
    render(
      <CarouselCard
        {...data[0]}
        complete
        onSave={function (): void {
          throw new Error("Function not implemented.");
        }}
      />,
    );

    expect(screen.getByText("Completado")).toBeOnTheScreen();
  });

  it("Call setOpen", () => {
    expect.assertions(4);
    render(
      <CarouselCard
        {...data[0]}
        complete={false}
        onSave={function (): void {
          throw new Error("Function not implemented.");
        }}
      />,
    );

    const openExercise = screen.getByText("Por completar");

    expect(openExercise).toBeDefined();
    expect(openExercise.props.children).toBe("Por completar");

    fireEvent.press(openExercise);

    expect(openExercise).toBeDefined();
    expect(openExercise.props.children).toBe("Por completar");
  });
});
