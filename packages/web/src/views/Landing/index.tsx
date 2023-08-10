import React, { useReducer, useState } from "react";

import { Button } from "components/Button";
import { signOut } from "utils/auth";

import { MedicineRecipe } from "./MedicineRecipe";
import { AddMedicineRecipe } from "./MedicineRecipe/Add";
import { PatientInfo } from "./PatientInfo";
import { PatientSearch } from "./PatientSearch";
import { t } from "./translations";

const Landing = (): JSX.Element => {
  const [patient, setPatient] = useState<string>();
  const [addMedicine, toggleAddMedicine] = useReducer((val) => !val, false);

  return (
    <>
      <PatientSearch onFind={setPatient} />
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
