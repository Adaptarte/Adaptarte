interface DBDoc<T> {
  id: string;
  data: T;
}

interface DBUser {
  diet: {
    carbs: number;
    dairy: number;
    fruitsAndVegetables: number;
    liquids: number;
    protein: number;
  };
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

interface DBUserCollections {
  FoodIntake: DBFoodIntake;
  MedicineIntake: DBMedicineIntake;
  MedicineRecipe: DBMedicineRecipe;
  Tension: DBTension;
}

type DBUserCollectionName = keyof DBUserCollections;

export type {
  DBDoc,
  DBUserCollectionName,
  DBFoodIntake,
  DBMedicineIntake,
  DBMedicineRecipe,
  DBTension,
  DBUser,
  DBUserCollections
};
