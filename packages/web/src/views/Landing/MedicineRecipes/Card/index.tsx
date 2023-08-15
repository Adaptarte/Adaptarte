import React, { useCallback } from "react";

import { Button } from "components/Button";
import { Paper } from "components/Paper";
import { useDBPatient } from "utils/contexts";

import { t } from "./translations";
import type { MedicineRecipeProps } from "./types";

const styles = {
  col: "col-6",
  key: "fw-bold mb-0 me-2",
  val: "mb-0",
};

const MedicineRecipe = ({ data, id }: MedicineRecipeProps): JSX.Element => {
  const db = useDBPatient();
  const handleDelete = useCallback(() => {
    db.delDoc("MedicineRecipes", id);
  }, [db, id]);

  return (
    <div className={"col-12 col-md-6 col-xl-4 my-2"}>
      <Paper className={"h-100"}>
        <p className={"h5 mb-0"}>{data.medicine}</p>
        <hr />
        <div className={"row"}>
          <div className={"col-6"}>
            <p className={styles.key}>{t().interval}</p>
            <p className={styles.val}>{data.interval}</p>
          </div>
          <div className={"col-6"}>
            <p className={styles.key}>{t().date}</p>
            <p className={styles.val}>{data.date.toLocaleString()}</p>
          </div>
          <div className={"col-12"}>
            <p className={styles.key}>{t().details}</p>
            <p className={styles.val}>{data.details ?? "-"}</p>
          </div>
        </div>
        <hr />
        <Button className={"me-2"}>{t().edit}</Button>
        <Button onClick={handleDelete}>{t().delete}</Button>
      </Paper>
    </div>
  );
};

export { MedicineRecipe };
