interface DBUser {
  score: number;
}

interface DBFoodIntake {
  date: Date;
  food: number;
}

interface DBMedicineIntake {
  date: Date;
  recipe: number;
}

interface DBMedicineRecipe {
  amount: number;
  details: string;
  interval: number;
  medicine: string;
  takeFrom: Date;
}

interface DBTension {
  date: Date;
  diastolic: number;
  systolic: number;
}

export type {
  DBFoodIntake,
  DBMedicineIntake,
  DBMedicineRecipe,
  DBTension,
  DBUser
};
