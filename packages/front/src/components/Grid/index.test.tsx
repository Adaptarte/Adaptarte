import { render, screen } from "@testing-library/react-native";

import { Text } from "components/Text";

import { Column, Row } from ".";

describe("Grid", () => {
  it("Renders Grid", () => {
    expect.assertions(2);
    render(
      <Row>
        <Column>
          <Text>{"Col1"}</Text>
        </Column>
        <Column>
          <Text>{"Col2"}</Text>
        </Column>
      </Row>,
    );

    expect(screen.queryByText("Col1")).toBeOnTheScreen();
    expect(screen.queryByText("Col2")).toBeOnTheScreen();
  });
});
