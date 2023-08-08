import { render, screen } from "@testing-library/react-native";

import { Text } from "components/Text";

import { List } from ".";

describe("List", () => {
  const data = ["A", "B", "C"];

  it("Render items", () => {
    expect.assertions(data.length);
    render(
      <List
        data={data}
        keyGetter={(el): string => el}
        renderItem={(el): JSX.Element => <Text>{el}</Text>}
      />,
    );

    data.forEach((el) => {
      expect(screen.queryByText(el)).toBeOnTheScreen();
    });
  });
});
