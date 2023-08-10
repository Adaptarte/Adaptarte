import React, { useReducer, useState } from "react";

import { Button } from "components/Button";
import { Input } from "components/Input";
import { signOut } from "utils/auth";

import { MedicineRecipe } from "./MedicineRecipe";
import { AddMedicineRecipe } from "./MedicineRecipe/Add";
import { PatientInfo } from "./PatientInfo";
import { t } from "./translations";

const Landing = (): JSX.Element => {
  const [patient, setPatient] = useState("");
  const [addMedicine, toggleAddMedicine] = useReducer((val) => !val, false);

  return (
    <>
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
      <p className={"h4 mb-2 mt-4"}>{t().medicineRecipes.title}</p>
      <Button onClick={toggleAddMedicine}>{t().medicineRecipes.add}</Button>
      <div className={"row"}>
        <MedicineRecipe
          data={{
            interval: 8,
            medicine: "Acído Acetilsalicílico",
          }}
        />
        <AddMedicineRecipe onClose={toggleAddMedicine} visible={addMedicine} />
      </div>
      <Button
        className={"position-absolute end-0 mx-4 my-3 top-0"}
        onClick={signOut}
      >
        {t().signOut}
      </Button>
    </>
  );
};

export { Landing };
