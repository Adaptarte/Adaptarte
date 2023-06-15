import type { IDataDose } from "types/dataDoses";

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

const illness: IDataDose[] = [];

const medicine: IDataDose[] = [];

const stress: IDataDose[] = [];

const dataDoses = [basic, carer, illness, medicine, stress];
const weights = [1, 0, 0, 0, 0];

const weightedRandom = (weights: number[]): number => {
  const wSum = [weights[0]];
  for (let i = 1; i < weights.length; i++) {
    wSum.push(wSum[i - 1] + weights[i]);
  }
  const rand = Math.random() * wSum[wSum.length - 1];
  return wSum.findIndex((val) => val >= rand);
};

const pickDataDose = (): IDataDose => {
  const group = dataDoses[weightedRandom(weights)];
  const i = Math.floor(Math.random() * group.length);
  return group[i];
};

export { dataDoses, pickDataDose };
