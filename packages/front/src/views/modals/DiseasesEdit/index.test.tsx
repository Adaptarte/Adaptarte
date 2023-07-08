import { fireEvent, render, screen } from "@testing-library/react-native";

import { fillDiseases } from "utils/patient";

import { DiseasesEdit } from ".";
import { t } from "./translations";

describe("Diseases", () => {
  const diseases = fillDiseases({
    hypertension: true
  });

  it("Render content", () => {
    expect.assertions(6);

    render(<DiseasesEdit diseases={diseases} visible />);

    expect(screen.queryByText(t().title)).toBeOnTheScreen();
    expect(screen.queryByText(t().diabetesMellitus)).toBeOnTheScreen();
    expect(screen.queryByText(t().epoc)).toBeOnTheScreen();
    expect(screen.queryByText(t().heartFailure)).toBeOnTheScreen();
    expect(screen.queryByText(t().hypertension)).toBeOnTheScreen();
    expect(screen.queryByText(t().save)).toBeOnTheScreen();
  });

  it("Save data", () => {
    expect.assertions(2);

    const onSave = jest.fn();
    render(<DiseasesEdit diseases={diseases} onSave={onSave} visible />);

    const epocLabel = screen.getByText(t().epoc);
    const saveBtn = screen.getByText(t().save);

    fireEvent.press(saveBtn);
    expect(onSave).toHaveBeenCalledTimes(0);
    fireEvent.press(epocLabel);
    fireEvent.press(saveBtn);
    expect(onSave).toHaveBeenCalledTimes(1);
  });
});
