import type { TDiseases } from "./db/types";

const defaultDiseases: TDiseases = {
  diabetesMellitus: false,
  epoc: false,
  heartFailure: false,
  hypertension: false
};

const fillDiseases = (diseases: Partial<TDiseases>): TDiseases => {
  return Object.assign({}, defaultDiseases, diseases);
};

export { fillDiseases };
