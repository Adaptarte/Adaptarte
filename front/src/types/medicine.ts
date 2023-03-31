interface IMedicineRecipe {
  amount: number;
  details?: string;
  id: number;
  interval: number;
  medicine: string;
  takeFrom: Date;
}

interface IMedicineIntake {
  date: Date;
  recipe: number;
}

export type { IMedicineRecipe, IMedicineIntake };
