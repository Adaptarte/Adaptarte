import {
  basic,
  byDisease,
  carer,
  medicine,
  stress,
} from "components/DataDose/data";
import type { TDataDose, TDataDoseGroup } from "components/DataDose/types";
import type { TDiseases } from "utils/db/types";
import { fillDiseases } from "utils/patient";

const WEIGHTS = {
  basic: 1,
  carer: 1,
  disease: 1,
  medicine: 1,
  stress: 1,
};

const weightedRandom = (weights: number[]): number => {
  const wSum = [weights[0]];
  for (let i = 1; i < weights.length; i++) {
    wSum.push(wSum[i - 1] + weights[i]);
  }
  const rand = Math.random() * wSum[wSum.length - 1];
  return wSum.findIndex((val) => val >= rand);
};

const getDataDoses = (diseases: Partial<TDiseases>): TDataDoseGroup[] => {
  const disease = Object.entries(fillDiseases(diseases)).reduce<TDataDose[]>(
    (acc, [key, val]) =>
      val ? acc.concat(byDisease[key as keyof TDiseases] ?? []) : acc,
    [],
  );
  const doses = { basic, carer, disease, medicine, stress };
  return Object.entries(doses).map(([key, val]) => ({
    data: val,
    weight: WEIGHTS[key as keyof typeof doses] * val.length,
  }));
};

const pickDataDose = (diseases: Partial<TDiseases>): TDataDose => {
  const doses = getDataDoses(diseases);
  const group = doses[weightedRandom(doses.map((el) => el.weight))];
  const i = Math.floor(Math.random() * group.data.length);
  return group.data[i];
};

export { getDataDoses, pickDataDose };
