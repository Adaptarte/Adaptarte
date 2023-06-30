import type { TDiseases } from "utils/db/types";
import { fillDiseases } from "utils/patient";

import type { TDataDose, TDataDoseGroup } from "./types";

const WEIGHTS = {
  basic: 1,
  carer: 1,
  disease: 1,
  medicine: 1,
  stress: 1
};

const basic: TDataDose[] = [
  {
    details: "08:00 am - 06:00 pm",
    tip: "Recuerda beber 8 vasos de agua al día"
  },
  {
    details: "Tomarla a una misma hora es más preciso",
    tip: "Toma tu tensión 3 o más veces por semana"
  },
  {
    details: "Es importante permanecer hidratado",
    tip: "Tome agua antes, durante y después de ejercitarse"
  }
];

const carer: TDataDose[] = [
  {
    details: "El cuidador familiar da al paciente motivación y apoyo valiosos",
    tip: "El cuidador ayuda a una rutina sea más amable y saludable"
  },
  {
    details:
      "Conocer las potencialidades y limitaciones ayuda a realizar mejor este rol",
    tip: "Analiza la experienca del cuidado como paciente y cuidador"
  }
];

const byDisease: Record<keyof TDiseases, TDataDose[]> = {
  diabetesMellitus: [
    {
      details: "La etiqueta nutricional del alimento indica su contenido",
      tip: "Evite alimentos ricos en azúcar, grasa, sal o sodio"
    },
    {
      details: "Mida el nivel de azúcar según indica el profesional de salud",
      tip: "Cumpla con los exámenes de azúcar en la sangre"
    }
  ],
  epoc: [
    {
      details: "En caso de requerir oxígeno, debe emplearse mientras come",
      tip: "Si necesita oxígeno, no lo suspensa al comer"
    },
    {
      details: "Los alimentos muy calientes o fríos pueden causar tos",
      tip: "Consuma alimentos a una temperatura intermedia"
    },
    {
      details: "Use un mayor número de comidas al día y porciones pequeñas",
      tip: "Consuma cantidades de comida moderadas"
    },
    {
      details: "Comer alimentos blandos produce menos fatiga",
      tip: "Consuma alimentos fáciles de digerir y masticar"
    },
    {
      details: "Tomar los medicamentos previo a comer evita la falta de aire",
      tip: "Tome los medicamentos una hora o más antes de comer"
    }
  ],
  heartFailure: [
    {
      details:
        "Si registra un cambio anormal de peso de un día a otro consulte al médico",
      tip: "Pésese a diario despúes de orinar y antes de desayunar"
    },
    {
      details: "Puede reemplazar la sal por hierbas y especias",
      tip: "Evite alimentos con sal o sodio"
    },
    {
      details: "La actividad física ayuda a fortalecer su corazón",
      tip: "Haga ejercicio según su cuerpo lo permita"
    }
  ],
  hypertension: [
    {
      details:
        "Evita alimentos con más de 500mg de sodio por cada 100g de producto",
      tip: "Evita alimentos con sal o sodio"
    },
    {
      details: "En especial los efervescentes",
      tip: "Evita fármacos que contengan sodio"
    },
    {
      details: "Estas sustancias aumentan la presión arterial",
      tip: "Evita sustancias excitantes como alcohol y cafeína"
    },
    {
      details: "Fumar disminuye la oxigenación de tu cuerpo",
      tip: "Pide ayuda si tienes problemas para dejar de fumar"
    }
  ]
};

const medicine: TDataDose[] = [];

const stress: TDataDose[] = [
  {
    details: "Al conocer sus situaciones de estrés podrá manejarlas mejor",
    tip: "Revise cuáles eventos le generan estrés"
  },
  {
    details: "Estas actividades ayudan a disminuir el estrés",
    tip: "Realice actividades de relajación y duerma lo suficiente"
  },
  {
    details: "Estas actividades ayudan a controlar el estrés",
    tip: "Realice actividades físicar y recreativas"
  },
  {
    details: "Ocuparse solo de lo más importante libera estrés innecesario",
    tip: "Establezca prioridades en sus actividades"
  }
];

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
    []
  );
  const doses = { basic, carer, disease, medicine, stress };
  return Object.entries(doses).map(([key, val]) => ({
    data: val,
    weight: WEIGHTS[key as keyof typeof doses] * val.length
  }));
};

const pickDataDose = (diseases: Partial<TDiseases>): TDataDose => {
  const doses = getDataDoses(diseases);
  const group = doses[weightedRandom(doses.map((el) => el.weight))];
  const i = Math.floor(Math.random() * group.data.length);
  return group.data[i];
};

export { getDataDoses, pickDataDose };
