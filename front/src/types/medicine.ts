interface MedicineRecipe {
  amount: number;
  details?: string;
  id: number;
  interval: number;
  medicine: string;
  takeFrom: Date;
}

interface MedicineIntake {
  date: Date;
  recipe: number;
}

export type { MedicineRecipe, MedicineIntake };
