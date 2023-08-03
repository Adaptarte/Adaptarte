import React, { useState } from "react";

import { Button } from "components/Button";
import { Input } from "components/Input";

import { MedicineRecipe } from "./MedicineRecipe";
import { PatientInfo } from "./PatientInfo";
import { t } from "./translations";

const Landing = (): JSX.Element => {
  const [patient, setPatient] = useState("");

  return (
    <div>
      <div className={"align-content-stretch d-flex mb-3"}>
        <Input
          className={"flex-grow-1 me-2"}
          onChange={setPatient}
          placeholder={t().search.placeholder}
          value={patient}
        />
        <Button>{t().search.button}</Button>
      </div>
      <PatientInfo />
      <p className={"h4 mb-1 mt-4"}>{t().medicineRecipes}</p>
      <div className={"row"}>
        <MedicineRecipe
          data={{
            interval: 8,
            medicine: "Acído Acetilsalicílico",
            takeFrom: new Date()
          }}
        />
      </div>
    </div>
  );
};

export { Landing };
