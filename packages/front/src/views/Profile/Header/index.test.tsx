import { render, screen } from "@testing-library/react-native";

import { ProfileHeader } from ".";
import { t } from "./translations";

describe("ProfileHeader", () => {
  const name = "John Doe";
  const photo = "https://picsum.photos/200";
  const diseases = { hypertension: true };

  it("Render properly", () => {
    expect.assertions(6);
    render(<ProfileHeader diseases={diseases} name={name} photo={photo} />);

    expect(screen.queryByTestId("img")).toBeOnTheScreen();
    expect(screen.queryByText(name)).toBeOnTheScreen();

    expect(screen.queryByText(t().hypertension)).toBeOnTheScreen();
    expect(screen.queryByText(t().diabetesMellitus)).not.toBeOnTheScreen();
    expect(screen.queryByText(t().epoc)).not.toBeOnTheScreen();
    expect(screen.queryByText(t().heartFailure)).not.toBeOnTheScreen();
  });

  it("Render fallback", () => {
    expect.assertions(2);
    render(<ProfileHeader diseases={diseases} name={undefined} photo={null} />);

    expect(screen.queryByTestId("icon-user-circle")).toBeOnTheScreen();
    expect(screen.queryByText("Paciente")).toBeOnTheScreen();
  });
});
