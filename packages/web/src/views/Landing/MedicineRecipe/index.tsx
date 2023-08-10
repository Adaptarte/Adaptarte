import React from "react";

import { Button } from "components/Button";
import { Paper } from "components/Paper";

import { t } from "./translations";
import type { MedicineRecipeProps } from "./types";

const styles = {
  col: "col-6",
  key: "fw-bold mb-0 me-2",
  val: "mb-0",
};

const MedicineRecipe = ({ data }: MedicineRecipeProps): JSX.Element => {
  return (
    <div className={"col-12 col-lg-6 my-2"}>
      <Paper className={"h-100"}>
        <p className={"h5 mb-0"}>{data.medicine}</p>
        <hr />
        <div className={"row"}>
          <div className={"col-6"}>
            <p className={styles.key}>{t().interval}</p>
            <p className={styles.val}>{data.interval}</p>
          </div>
          <div className={"col-12"}>
            <p className={styles.key}>{t().details}</p>
            <p className={styles.val}>{data.details ?? "-"}</p>
          </div>
        </div>
        <hr />
        <Button className={"me-2"}>{t().edit}</Button>
        <Button>{t().delete}</Button>
      </Paper>
    </div>
  );
};

export { MedicineRecipe };
