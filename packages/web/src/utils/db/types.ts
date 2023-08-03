const allDiseases = [
  "diabetesMellitus",
  "epoc",
  "heartFailure",
  "hypertension"
] as const;

type DBDisease = (typeof allDiseases)[number];

interface DBDoc<T extends object> {
  id: string;
  data: T;
}

interface DBUser {
  active?: boolean;
  basicInfo?: {
    id?: string;
    name?: string;
    phone?: string;
  };
  diseases?: DBDisease[];
  score?: number;
}

interface DBCalmActivity {
  activity: string;
  date: Date;
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
  details?: string;
  interval: number;
  medicine: string;
  takeFrom: Date;
}

interface DBTension {
  date: Date;
  diastolic: number;
  systolic: number;
}

interface DBWeight {
  date: Date;
  kg: number;
}

interface DBUserCollections {
  CalmActivities: DBCalmActivity;
  EmergencyContacts: DBEmergencyContacts;
  Exercises: DBExercise;
  FoodIntake: DBFoodIntake;
  MedicineIntake: DBMedicineIntake;
  MedicineRecipe: DBMedicineRecipe;
  Tension: DBTension;
  Weight: DBWeight;
}

type DBUserCollectionName = keyof DBUserCollections;

export type {
  DBCalmActivity,
  DBDisease,
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
  DBWeight
};
export { allDiseases };
