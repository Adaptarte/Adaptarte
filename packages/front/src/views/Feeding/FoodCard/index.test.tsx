import { fireEvent, render, screen } from "@testing-library/react-native";

import type { DBFoodIntake } from "utils/db/types";
import { getFoodById } from "utils/food";

import { FoodCard } from ".";

describe("FoodCard", () => {
  const data: DBFoodIntake = {
    date: new Date(),
    food: 1,
  };
  const id = "A2c";
  let onDelete: jest.Mock;

  beforeEach(() => {
    onDelete = jest.fn();
    render(<FoodCard data={data} id={id} onDelete={onDelete} />);
  });

  it("Render properly", () => {
    expect.assertions(3);
    const food = getFoodById(1);

    expect(screen.queryByText(food.name)).toBeOnTheScreen();
    expect(screen.queryByTestId(`img-${food.img}`)).toBeOnTheScreen();
    expect(screen.queryByTestId("icon-minus-circle")).toBeOnTheScreen();
  });

  it("Delete item", () => {
    expect.assertions(1);

    fireEvent.press(screen.getByTestId("icon-minus-circle"));
    expect(onDelete).toHaveBeenCalledWith(id);
  });
});
