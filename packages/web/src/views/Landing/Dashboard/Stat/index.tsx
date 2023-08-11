import React from "react";

import { Paper } from "components/Paper";

import type { DashboardStatProps } from "./types";

const DashboardStat = ({ name, value }: DashboardStatProps): JSX.Element => {
  return (
    <div className={"col-6 col-md-4 col-lg-2"}>
      <Paper>
        <p className={"fw-bold mb-0"}>{name}</p>
        <p className={"mb-0"}>{value}</p>
      </Paper>
    </div>
  );
};

export { DashboardStat };
