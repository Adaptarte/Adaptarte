import { render, screen } from "@testing-library/react-native";

import { ProfileHeader } from ".";

describe("ProfileHeader", () => {
  const name = "John Doe";
  const photo = "https://picsum.photos/200";

  it("Render properly", () => {
    expect.assertions(2);
    render(<ProfileHeader name={name} photo={photo} />);

    expect(screen.queryByTestId("img")).toBeOnTheScreen();
    expect(screen.queryByText(name)).toBeOnTheScreen();
  });

  it("Render fallback", () => {
    expect.assertions(2);
    render(<ProfileHeader name={null} photo={null} />);

    expect(screen.queryByTestId("icon-user-circle")).toBeOnTheScreen();
    expect(screen.queryByText("Paciente")).toBeOnTheScreen();
  });
});
