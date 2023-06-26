import type { IDataDose } from "types/dataDoses";
import type { TDiseases } from "utils/db/types";
import { fillDiseases } from "utils/patient";

const basic: IDataDose[] = [
  {
    details: "08:00 am - 06:00 pm",
    tip: "Recuerda beber 8 vasos de agua al día"
  },
  {
    details: "Tomarla a una misma hora es más preciso",
    tip: "Toma tu tensión 3 o más veces por semana"
  }
];

const carer: IDataDose[] = [];

const byDisease: Record<keyof TDiseases, IDataDose[]> = {
  epoc: [],
  hypertension: []
};

const medicine: IDataDose[] = [];

const stress: IDataDose[] = [];

const BASIC_WEIGHT = 1;
const CARER_WEIGHT = 0;
const DISEASE_WEIGHT = 0;
const MEDICINE_WEIGHT = 0;
const STREES_WEIGHT = 0;

const weights = [
  BASIC_WEIGHT,
  CARER_WEIGHT,
  DISEASE_WEIGHT,
  MEDICINE_WEIGHT,
  STREES_WEIGHT
];

const weightedRandom = (weights: number[]): number => {
  const wSum = [weights[0]];
  for (let i = 1; i < weights.length; i++) {
    wSum.push(wSum[i - 1] + weights[i]);
  }
  const rand = Math.random() * wSum[wSum.length - 1];
  return wSum.findIndex((val) => val >= rand);
};

const getDataDoses = (diseases: Partial<TDiseases>): IDataDose[][] => {
  const disease = Object.entries(fillDiseases(diseases)).reduce<IDataDose[]>(
    (acc, [key, val]) =>
      val ? acc.concat(byDisease[key as keyof TDiseases] ?? []) : acc,
    []
  );
  return [basic, carer, disease, medicine, stress];
};

const pickDataDose = (diseases: Partial<TDiseases>): IDataDose => {
  const doses = getDataDoses(diseases);
  const group = doses[weightedRandom(weights)];
  const i = Math.floor(Math.random() * group.length);
  return group[i];
};

export { getDataDoses, pickDataDose };
