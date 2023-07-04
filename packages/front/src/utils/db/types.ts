const allDiseases = [
  "diabetesMellitus",
  "epoc",
  "heartFailure",
  "hypertension"
] as const;
type TDiseases = Record<(typeof allDiseases)[number], boolean>;

interface DBDoc<T extends object> {
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
  diseases: TDiseases;
  score: number;
}

interface DBEmergencyContacts {
  name: string;
  phone: string;
}

interface DBExercise {
  date: Date;
  exercise: string;
  duration: number;
}

interface DBFoodIntake {
  date: Date;
  food: number;
}

interface DBMedicineIntake {
  date: Date;
  recipe: string;
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
  EmergencyContacts: DBEmergencyContacts;
  Exercises: DBExercise;
  FoodIntake: DBFoodIntake;
  MedicineIntake: DBMedicineIntake;
  MedicineRecipe: DBMedicineRecipe;
  Tension: DBTension;
}

type DBUserCollectionName = keyof DBUserCollections;

export type {
  DBDoc,
  DBUserCollectionName,
  DBEmergencyContacts,
  DBExercise,
  DBFoodIntake,
  DBMedicineIntake,
  DBMedicineRecipe,
  DBTension,
  DBUser,
  DBUserCollections,
  TDiseases
};
export { allDiseases };
