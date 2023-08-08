import type { QueryFilter } from "./firebase/types";

const allDiseases = [
  "diabetesMellitus",
  "epoc",
  "heartFailure",
  "hypertension",
] as const;
type TDiseases = Record<(typeof allDiseases)[number], boolean>;

interface DBDoc<T extends object> {
  id: string;
  data: T;
}

interface DBUser {
  basicInfo?: {
    id?: string;
    phone?: string;
  };
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
  amount: number;
  details: string;
  interval: number;
  medicine: string;
  takeFrom: Date;
}

interface DBOperations {
  addDoc: <T extends keyof DBUserCollections>(
    collection: T,
    data: DBUserCollections[T],
  ) => void;
  delDoc: (collection: keyof DBUserCollections, doc: string) => void;
  getDocs: <T extends keyof DBUserCollections>(
    collection: T,
    filter?: QueryFilter<DBUserCollections[T]>,
  ) => DBDoc<DBUserCollections[T]>[];
  getUser: () => DBUser | undefined;
  updateUser: (data: Partial<DBUser>) => void;
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
  DBDoc,
  DBUserCollectionName,
  DBEmergencyContacts,
  DBExercise,
  DBFoodIntake,
  DBMedicineIntake,
  DBMedicineRecipe,
  DBOperations,
  DBTension,
  DBUser,
  DBUserCollections,
  DBWeight,
  TDiseases,
};
export { allDiseases };
