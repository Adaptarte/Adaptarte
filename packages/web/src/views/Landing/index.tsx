import React, { useState } from "react";

import { Button } from "components/Button";
import { signOut } from "utils/auth";
import { DBPatientContext } from "utils/contexts";
import { useDB } from "utils/db";

import { Dashboard } from "./Dashboard";
import { MedicineRecipes } from "./MedicineRecipes";
import { PatientInfo } from "./PatientInfo";
import { PatientSearch } from "./PatientSearch";
import { t } from "./translations";

const Landing = (): JSX.Element => {
  const [patient, setPatient] = useState<string>();
  const db = useDB(patient);

  return (
    <DBPatientContext.Provider value={db}>
      <PatientSearch onFind={setPatient} />
      {patient === undefined ? null : (
        <>
          <PatientInfo />
          <hr />
          <Dashboard />
          <hr />
          <MedicineRecipes />
        </>
      )}
      <Button
        className={"position-absolute end-0 mx-4 my-3 top-0"}
        onClick={signOut}
      >
        {t().signOut}
      </Button>
    </DBPatientContext.Provider>
  );
};

export { Landing };
