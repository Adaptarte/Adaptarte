import type { IDataDose } from "types/dataDoses";

const dataDoses: IDataDose[] = [
  {
    details: "08:00 am - 06:00 pm",
    tip: "Recuerda beber 8 vasos de agua al día"
  }
];

const pickDataDose = (): IDataDose => {
  const i = Math.floor(Math.random() * dataDoses.length);
  return dataDoses[i];
};

export { dataDoses, pickDataDose };
