import React, { useState } from "react";

import { Button } from "components/Button";
import { Input } from "components/Input";
import { Paper } from "components/Paper";

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
      <Paper className={"mb-2"}>
        <PatientInfo />
      </Paper>
    </div>
  );
};

export { Landing };
