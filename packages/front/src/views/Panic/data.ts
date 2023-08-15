import type { TDiseases } from "utils/db/types";
import { fillDiseases } from "utils/patient";

const deleteDuplicates = (symptoms: string[]): string[] => {
  const result = new Set(symptoms);
  return [...result];
};

const getSymptoms = (diseases: Partial<TDiseases>): string[] => {
  return Object.entries(fillDiseases(diseases)).reduce<string[]>(
    (acc, [key, val]) => {
      return val
        ? acc.concat(symptomsByDiease[key as keyof TDiseases] ?? [])
        : acc;
    },
    [],
  );
};

const symptomsByDiease: Record<keyof TDiseases, string[]> = {
  diabetesMellitus: [
    "Náuseas y vómitos.",
    "Incapacidad para comer o tomar líquidos.",
    "Signos de deshidratación (ojos hundidos, boca o lengua seca).",
    "Dolor abdominal.",
    "Respiración rápida.",
    "Adormecimiento.",
    "Nivel de glucosa en sangre mayor a 250 mg/dL o menor a 70 mg/dL.",
  ],
  epoc: [
    "Aumento de la sensación de ahogo.",
    "Dificultad para respirar.",
    "Color azulado en la boca o las uñas.",
    "Aumento de las secreciones pulmonares, cambios en su color o la consistencia.",
    "Fiebre.",
    "Pies hinchados.",
    "Dolor en el área del pecho o espalda.",
    "Somnolencia o insomnio",
    "Dolor de cabeza.",
  ],
  heartFailure: [
    "Necesita más almohadas de lo habitual para dormir.",
    "Tiene dificultad para respirar cuando hace actividades.",
    "Le falta aire al hacer actividades.",
    "Su peso aumenta más de 1 kilo de un día para otro.",
  ],
  hypertension: [
    "Dolor de cabeza.",
    "Confusión.",
    "Visión borrosa.",
    "Dificultad para respirar.",
    "Hemorragia nasal.",
    "Ansiedad grave.",
    "Sensación de dolor u opresión en el pecho.",
    "Adormecimiento.",
    "Náuseas y vómitos.",
    "Convulsiones.",
  ],
};

export { deleteDuplicates, getSymptoms };
