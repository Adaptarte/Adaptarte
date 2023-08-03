import React from "react";

import { Button } from "components/Button";
import { Paper } from "components/Paper";

import { t } from "./translations";
import type { PatientInfoProps } from "./types";

const styles = {
  col: "col-12 col-md-6 col-xl-3",
  key: "fw-bold mb-0",
  val: "mb-0"
};

const PatientInfo = ({ data = {} }: PatientInfoProps): JSX.Element => {
  return (
    <Paper>
      <div className={"row gy-3"}>
        <div className={styles.col}>
          <Paper>
            <p className={styles.key}>{t().id}</p>
            <p className={styles.val}>{data.basicInfo?.id ?? t().undefined}</p>
          </Paper>
        </div>
        <div className={styles.col}>
          <Paper>
            <p className={styles.key}>{t().name}</p>
            <p className={styles.val}>
              {data.basicInfo?.name ?? t().undefined}
            </p>
          </Paper>
        </div>
        <div className={styles.col}>
          <Paper>
            <p className={styles.key}>{t().phone}</p>
            <p className={styles.val}>
              {data.basicInfo?.phone ?? t().undefined}
            </p>
          </Paper>
        </div>
        <div className={styles.col}>
          <Paper>
            <p className={styles.key}>{t().status}</p>
            <p className={styles.val}>
              {data.active ? t().active : t().inactive}
            </p>
          </Paper>
        </div>
        <div className={"col-12"}>
          <Paper>
            <p className={styles.key}>{t().diseases.label}</p>
            <div className={"d-flex flex-wrap"}>
              {data.diseases?.map((el) => (
                <p className={"mb-0 me-3"} key={el}>
                  {t().diseases[el]}
                </p>
              ))}
            </div>
          </Paper>
        </div>
      </div>
      <Button className={"mt-3"}>{t().edit}</Button>
    </Paper>
  );
};

export { PatientInfo };
