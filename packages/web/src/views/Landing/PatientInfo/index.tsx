import React, { useReducer } from "react";

import { Button } from "components/Button";
import { Paper } from "components/Paper";
import { useDBPatient } from "utils/contexts";
import type { DBDisease } from "utils/db/types";

import { EditPatientInfo } from "./Edit";
import { t } from "./translations";

const styles = {
  col: "col-12 col-md-6 col-xl-3",
  key: "fw-bold mb-0",
  val: "mb-0",
};

const PatientInfo = (): JSX.Element => {
  const [edit, toggleEdit] = useReducer((val) => !val, false);
  const db = useDBPatient();
  const data = db.getUser()?.data;

  const diseases = Object.keys(data?.diseases ?? {}).filter(
    (key) => data?.diseases?.[key as DBDisease],
  ) as DBDisease[];
  return (
    <Paper>
      <div className={"row gy-3"}>
        <div className={styles.col}>
          <Paper>
            <p className={styles.key}>{t().id}</p>
            <p className={styles.val}>{data?.basicInfo?.id ?? t().undefined}</p>
          </Paper>
        </div>
        <div className={styles.col}>
          <Paper>
            <p className={styles.key}>{t().name}</p>
            <p className={styles.val}>
              {data?.basicInfo?.name ?? t().undefined}
            </p>
          </Paper>
        </div>
        <div className={styles.col}>
          <Paper>
            <p className={styles.key}>{t().phone}</p>
            <p className={styles.val}>
              {data?.basicInfo?.phone ?? t().undefined}
            </p>
          </Paper>
        </div>
        <div className={styles.col}>
          <Paper>
            <p className={styles.key}>{t().status}</p>
            <p className={styles.val}>
              {data?.active ? t().active : t().inactive}
            </p>
          </Paper>
        </div>
        <div className={"col-12"}>
          <Paper>
            <p className={styles.key}>{t().diseases.label}</p>
            <div className={"d-flex flex-wrap"}>
              {diseases.map((el) => (
                <p className={"mb-0 me-3"} key={el}>
                  {t().diseases[el]}
                </p>
              ))}
            </div>
          </Paper>
        </div>
      </div>
      <Button className={"mt-3"} onClick={toggleEdit}>
        {t().edit}
      </Button>
      <EditPatientInfo
        data={data ?? {}}
        key={JSON.stringify(data)}
        onClose={toggleEdit}
        visible={edit}
      />
    </Paper>
  );
};

export { PatientInfo };
