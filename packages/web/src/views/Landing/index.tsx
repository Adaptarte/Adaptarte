import React, { useCallback, useState } from "react";

import { Button } from "components/Button";
import { signOut } from "utils/auth";
import { DBPatientContext } from "utils/contexts";
import { useDB } from "utils/db";
import { getDBData } from "utils/db/download";
import { saveJson } from "utils/files";

import { Dashboard } from "./Dashboard";
import { MedicineRecipes } from "./MedicineRecipes";
import { PatientInfo } from "./PatientInfo";
import { PatientSearch } from "./PatientSearch";
import { t } from "./translations";

const Landing = (): JSX.Element => {
  const [patient, setPatient] = useState<string>();
  const db = useDB(patient);

  const handleDownloadDB = useCallback(() => {
    getDBData().then(saveJson).catch(console.error);
  }, []);

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
      <div className={"position-absolute end-0 mx-4 my-3 top-0"}>
        <Button onClick={handleDownloadDB}>{t().downloadDB}</Button>
        <Button className={"ms-2"} onClick={signOut}>
          {t().signOut}
        </Button>
      </div>
    </DBPatientContext.Provider>
  );
};

export { Landing };
