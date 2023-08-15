const SPA = {
  calms: "Calma",
  exercises: "Ejercicio",
  foodIntakes: "Alimentación",
  medicineIntakes: "Medicación",
  records: (num: number): string => `${num} registros`,
  score: "Puntaje",
  tensions: {
    diastolic: "Presión diastólica",
    name: "Tensión",
    systolic: "Presión sistólica",
  },
  weights: "Peso",
};

const t = (): typeof SPA => SPA;

export { t };
