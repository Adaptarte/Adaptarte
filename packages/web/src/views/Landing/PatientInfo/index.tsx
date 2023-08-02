import React from "react";

import { t } from "./translations";
import type { PatientInfoProps } from "./types";

const styles = {
  col: "col-md-6 col-lg-3 my-2",
  key: "fw-bold my-0",
  val: "border-bottom border-dark my-0"
};

const PatientInfo = ({ data = {} }: PatientInfoProps): JSX.Element => {
  return (
    <div className={"row"}>
      <div className={styles.col}>
        <p className={styles.key}>{t().id}</p>
      </div>
      <div className={styles.col}>
        <p className={styles.val}>{data.basicInfo?.id ?? t().undefined}</p>
      </div>
      <div className={styles.col}>
        <p className={styles.key}>{t().name}</p>
      </div>
      <div className={styles.col}>
        <p className={styles.val}>{data.basicInfo?.name ?? t().undefined}</p>
      </div>
      <div className={styles.col}>
        <p className={styles.key}>{t().phone}</p>
      </div>
      <div className={styles.col}>
        <p className={styles.val}>{data.basicInfo?.phone ?? t().undefined}</p>
      </div>
      <div className={styles.col}>
        <p className={styles.key}>{t().status}</p>
      </div>
      <div className={styles.col}>
        <p className={styles.val}>{data.active ? t().active : t().inactive}</p>
      </div>
    </div>
  );
};

export { PatientInfo };
