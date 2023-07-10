import { render, screen } from "@testing-library/react-native";

import { Img } from ".";

describe("Img", () => {
  it("Render image", () => {
    expect.assertions(1);

    render(
      <>
        <Img src={"close"} />
        <Img src={{ uri: "https://picsum.photos/200" }} />
      </>
    );

    const img = screen.queryByTestId("img-close");
    expect(img).toBeOnTheScreen();
  });
});
