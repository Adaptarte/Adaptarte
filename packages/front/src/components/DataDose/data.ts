import type { TDiseases } from "utils/db/types";

import type { TDataDose } from "./types";

const basic: TDataDose[] = [
  {
    details: "08:00 am - 06:00 pm",
    img: "dataDose",
    tip: "Recuerda beber 8 vasos de agua al día"
  },
  {
    details: "Tomarla a una misma hora es más preciso",
    img: "diseaseRegister",
    tip: "Toma tu tensión 3 o más veces por semana"
  },
  {
    details: "Es importante permanecer hidratado",
    img: "drinkingWater",
    tip: "Tome agua antes, durante y después de ejercitarse"
  }
];

const carer: TDataDose[] = [
  {
    details: "El cuidador familiar da al paciente motivación y apoyo valiosos",
    img: "care",
    tip: "El cuidador ayuda a una rutina sea más amable y saludable"
  },
  {
    details:
      "Conocer las potencialidades y limitaciones ayuda a realizar mejor este rol",
    img: "care",
    tip: "Analiza la experienca del cuidado como paciente y cuidador"
  }
];

const byDisease: Record<keyof TDiseases, TDataDose[]> = {
  diabetesMellitus: [
    {
      details: "La etiqueta nutricional del alimento indica su contenido",
      img: "feeding",
      tip: "Evite alimentos ricos en azúcar, grasa, sal o sodio"
    },
    {
      details: "Mida el nivel de azúcar según indica el profesional de salud",
      img: "diseaseRegister",
      tip: "Cumpla con los exámenes de azúcar en la sangre"
    }
  ],
  epoc: [
    {
      details: "En caso de requerir oxígeno, debe emplearse mientras come",
      img: "diet",
      tip: "Si necesita oxígeno, no lo suspensa al comer"
    },
    {
      details: "Los alimentos muy calientes o fríos pueden causar tos",
      img: "feeding",
      tip: "Consuma alimentos a una temperatura intermedia"
    },
    {
      details: "Use un mayor número de comidas al día y porciones pequeñas",
      img: "feeding",
      tip: "Consuma cantidades de comida moderadas"
    },
    {
      details: "Comer alimentos blandos produce menos fatiga",
      img: "feeding",
      tip: "Consuma alimentos fáciles de digerir y masticar"
    },
    {
      details: "Tomar los medicamentos previo a comer evita la falta de aire",
      img: "pills",
      tip: "Tome los medicamentos una hora o más antes de comer"
    }
  ],
  heartFailure: [
    {
      details:
        "Si registra un cambio anormal de peso de un día a otro consulte al médico",
      img: "diseaseRegister",
      tip: "Pésese a diario despúes de orinar y antes de desayunar"
    },
    {
      details: "Puede reemplazar la sal por hierbas y especias",
      img: "diet",
      tip: "Evite alimentos con sal o sodio"
    },
    {
      details: "La actividad física ayuda a fortalecer su corazón",
      img: "exercise",
      tip: "Haga ejercicio según su cuerpo lo permita"
    }
  ],
  hypertension: [
    {
      details:
        "Evita alimentos con más de 500mg de sodio por cada 100g de producto",
      img: "diet",
      tip: "Evita alimentos con sal o sodio"
    },
    {
      details: "En especial los efervescentes",
      img: "pills",
      tip: "Evita fármacos que contengan sodio"
    },
    {
      details: "Estas sustancias aumentan la presión arterial",
      img: "feeding",
      tip: "Evita sustancias excitantes como alcohol y cafeína"
    },
    {
      details: "Fumar disminuye la oxigenación de tu cuerpo",
      img: "diseaseRegister",
      tip: "Pide ayuda si tienes problemas para dejar de fumar"
    }
  ]
};

const medicine: TDataDose[] = [
  {
    details: "Este puede alterar el efecto esperado de estos.",
    img: "pills",
    tip:
      "Verifique si debe tomar los medicamentos antes, durante o después de " +
      "los alimentos"
  },
  {
    details: "Tome la dosis el número de veces recetadas",
    img: "pills",
    tip: "Si olvida tomar algún medicamento, no tome doble dosis."
  },
  {
    details: "Esto ayudará que su tratamiento sea efectivo",
    img: "diseaseRegister",
    tip:
      "Recuerde tomar sus medicamentos tal y como el médico se lo ha " +
      "formulado."
  },
  {
    details: "Te ayuda a tomar la dosis receta por el médico",
    img: "diseaseRegister",
    tip: "Para los medicamentos en forma liquida use el dosificador incluido."
  },
  {
    details: "Consultelo con su equipo de salud.",
    img: "diseaseRegister",
    tip: "Si nota alguna reacción anormal al tomar su medicina."
  }
];

const stress: TDataDose[] = [
  {
    details: "Al conocer sus situaciones de estrés podrá manejarlas mejor",
    img: "calm",
    tip: "Revise cuáles eventos le generan estrés"
  },
  {
    details: "Estas actividades ayudan a disminuir el estrés",
    img: "calm",
    tip: "Realice actividades de relajación y duerma lo suficiente"
  },
  {
    details: "Estas actividades ayudan a controlar el estrés",
    img: "exercise",
    tip: "Realice actividades físicar y recreativas"
  },
  {
    details: "Ocuparse solo de lo más importante libera estrés innecesario",
    img: "stretching",
    tip: "Establezca prioridades en sus actividades"
  }
];

export { basic, carer, medicine, stress, byDisease };
