import { render, screen } from "@testing-library/react-native";

import { PatientInfoEdit } from ".";
import { t } from "./translations";

describe("views/modals/PatientInfoEdit", () => {
  beforeEach(() => {
    render(<PatientInfoEdit data={{}} visible />);
  });

  it("Show form", () => {
    expect.assertions(4);

    const texts = [t().id.label, t().name.label, t().phone.label, t().save];
    texts.forEach((text) => {
      expect(screen.queryByText(text)).toBeOnTheScreen();
    });
  });
});
