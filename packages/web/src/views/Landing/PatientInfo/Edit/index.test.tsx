import { render, screen } from "@testing-library/react";
import React, { useReducer } from "react";

import { EditPatientInfo } from ".";
import { t } from "./translations";

describe("views/Landing/PatientInfo/Edit", () => {
  const TestEditPatientInfo = (): JSX.Element => {
    const [visible, toggleVisible] = useReducer((val) => !val, true);

    return (
      <EditPatientInfo data={{}} onClose={toggleVisible} visible={visible} />
    );
  };

  beforeEach(() => {
    render(<TestEditPatientInfo />);
  });

  it("Show content", () => {
    expect.assertions(6);

    const texts = [
      t().diseases.diabetesMellitus,
      t().diseases.epoc,
      t().diseases.heartFailure,
      t().diseases.hypertension,
      t().status.label,
      t().save,
    ];
    texts.forEach((text) => {
      expect(screen.queryByText(text)).toBeInTheDocument();
    });
  });
});
