import { createContext, useContext } from "react";

import type { DBOperations } from "utils/db/types";

const DBPatientContext = createContext<DBOperations | null>(null);

const useDBPatient = (): DBOperations => {
  const ctx = useContext(DBPatientContext);
  if (ctx === null) {
    throw Error("DBPatient context provider not found");
  }
  return ctx;
};

export { DBPatientContext, useDBPatient };
