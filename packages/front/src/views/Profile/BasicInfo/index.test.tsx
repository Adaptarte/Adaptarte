import { render, screen } from "@testing-library/react-native";

import { BasicInfo } from ".";
import { t } from "./translations";

describe("Profile/BasicInfo", () => {
  const data = {
    id: "987 654",
    phone: "310 203 0405",
  };

  it("Render content", () => {
    expect.assertions(5);
    render(<BasicInfo data={data} />);

    expect(screen.queryByText(t().title)).toBeOnTheScreen();
    expect(screen.queryByText(t().id)).toBeOnTheScreen();
    expect(screen.queryByText(t().phone)).toBeOnTheScreen();
    expect(screen.queryByText(data.id)).toBeOnTheScreen();
    expect(screen.queryByText(data.phone)).toBeOnTheScreen();
  });
});
